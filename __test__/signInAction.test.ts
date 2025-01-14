/**
 * @jest-environment node
 */
import { signInAction } from "@/actions/auth";
import { getUserByEmail } from "@/data/User";
import { generateVerificationByEmail } from "@/lib/verification-token";
import { sendVerificationEmail } from "@/lib/mail";
import { signIn } from "@/auth";
import { AuthError } from "next-auth"; // Sesuaikan path jika ada

global.Request = jest.fn(() => ({
  headers: new Map(),
  method: "",
  url: "",
})) as unknown as typeof Request;

jest.mock("@/auth", () => ({
  signIn: jest.fn(),
}));

jest.mock("@/data/User", () => ({
  getUserByEmail: jest.fn(),
}));

jest.mock("@/lib/verification-token", () => ({
  generateVerificationByEmail: jest.fn(),
}));

jest.mock("@/lib/mail", () => ({
  sendVerificationEmail: jest.fn(),
}));

describe("Sign In Action Testing Unit", () => {
  const mockSignIn = jest.mocked(signIn);
  const mockGetUserByEmail = jest.mocked(getUserByEmail);
  const mockGenerateVerificationByEmail = jest.mocked(
    generateVerificationByEmail,
  );
  const mockSendVerificationEmail = jest.mocked(sendVerificationEmail);

  const validValues = { email: "test@example.com", password: "password123" };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should return error if Email format is Invalid", async () => {
    const result = await signInAction({ email: "invalid", password: "short" });
    expect(result).toEqual({ error: "Something went wrong" });
  });

  it("Should return error if user does not exist", async () => {
    mockGetUserByEmail.mockResolvedValue(null);
    const result = await signInAction(validValues);
    expect(result).toEqual({ error: "Something went wrong" });
    expect(mockGetUserByEmail).toHaveBeenCalledWith(validValues.email);
  });

  it("should return error if emailVerified is false and send verification email", async () => {
    mockGetUserByEmail.mockResolvedValue({
      email: validValues.email,
      password: validValues.password,
      name: null,
      id: "123",
      username: "testuser",
      emailVerified: null,
      image: null,
      createdAt: new Date("2025-01-01T00:00:00.000Z"),
      updatedAt: new Date("2025-01-10T00:00:00.000Z"),
    });

    mockGenerateVerificationByEmail.mockResolvedValue({
      id: "11",
      expires: new Date(new Date().getTime() + 1000 * 3600),
      email: validValues.email,
      token: "verification-token",
    });

    const result = await signInAction(validValues);

    expect(result).toEqual({ success: "Email Verification has sent" });
    expect(mockGenerateVerificationByEmail).toHaveBeenCalledWith(
      validValues.email,
    );
    expect(mockSendVerificationEmail).toHaveBeenCalledWith(
      validValues.email,
      "verification-token",
    );
  });

  it("Should return Invalid Credential, if the email is correct. But pasword doesn't match", async () => {
    mockGetUserByEmail.mockResolvedValue({
      email: validValues.email,
      password: validValues.password,
      name: null,
      id: "123",
      username: "testuser",
      emailVerified: new Date("2025-01-01T00:00:00.000Z"),
      image: null,
      createdAt: new Date("2025-01-01T00:00:00.000Z"),
      updatedAt: new Date("2025-01-10T00:00:00.000Z"),
    });

    mockSignIn.mockRejectedValue(new AuthError("CredentialsSignin"));
    // mockSignIn.mockImplementation(() => Promise.reject("error"));

    const result = await signInAction({
      email: validValues.email,
      password: "invalid values",
    });
    expect(result).toEqual({ error: expect.any(String) });
    expect(mockSignIn).toHaveBeenCalledWith("credentials", {
      email: validValues.email,
      password: "invalid values",
      redirectTo: expect.any(String),
    });
  });

  it("should return error if unexpected error occurs during signIn", async () => {
    mockGetUserByEmail.mockResolvedValue({
      email: validValues.email,
      password: validValues.password,
      name: null,
      id: "123",
      username: "testuser",
      emailVerified: new Date("2025-01-01T00:00:00.000Z"),
      image: null,
      createdAt: new Date("2025-01-01T00:00:00.000Z"),
      updatedAt: new Date("2025-01-10T00:00:00.000Z"),
    });

    mockSignIn.mockRejectedValue(new Error("Unexpected error"));

    await expect(signInAction(validValues)).rejects.toThrow("Unexpected error");
    expect(mockSignIn).toHaveBeenCalledWith("credentials", {
      email: validValues.email,
      password: validValues.password,
      redirectTo: expect.any(String),
    });
  });

  it("should return success if signIn is successful", async () => {
    mockGetUserByEmail.mockResolvedValue({
      email: validValues.email,
      password: validValues.password,
      name: null,
      id: "123",
      username: "testuser",
      emailVerified: new Date("2025-01-01T00:00:00.000Z"),
      image: null,
      createdAt: new Date("2025-01-01T00:00:00.000Z"),
      updatedAt: new Date("2025-01-10T00:00:00.000Z"),
    });

    mockSignIn.mockResolvedValue({
      ok: true,
      status: 200,
      url: null,
      error: undefined,
      code: undefined,
    });

    const result = await signInAction(validValues);

    expect(result).toEqual({ success: "SignIn Succces Welcome Back" });
    expect(mockSignIn).toHaveBeenCalledWith("credentials", {
      email: validValues.email,
      password: validValues.password,
      redirectTo: expect.any(String),
    });
  });
});

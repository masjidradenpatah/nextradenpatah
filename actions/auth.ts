"use server";

import z from "zod";
import bcrypt from "bcryptjs";
import {
  signUpSchema,
  signInSchema,
  resetPasswordSchema,
  newPasswordSchema,
} from "@/schemas/authSchemas";
import { getUserByEmail } from "@/data/User";
import { prisma } from "@/lib/db";
// import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { generateVerificationByEmail } from "@/lib/verification-token";
import { sendResetPasswordEmail, sendVerificationEmail } from "@/lib/mail";
import { getVerificationTokenByToken } from "@/data/VerificationToken";
import { generateResetPasswordTokenByEmail } from "@/lib/reset-password-token";
import { getResetPasswordTokenByToken } from "@/data/ResetPasswordToken";
import { signIn } from "@/auth";

export const signInAction = async (
  values: z.infer<typeof signInSchema>,
): Promise<Record<string, string>> => {
  const validatedFields = signInSchema.safeParse(values);

  // signIn Action Test 01
  if (!validatedFields.success) {
    return { error: "Something went wrong" };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Something went wrong" };
  }

  // TODO: Check if the email is Verified or not
  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationByEmail(
      existingUser.email,
    );
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token,
    );
    return { success: "Email Verification has sent" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          // just for testing
          // return { success: "Succesfull" };
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }
    throw error;
  }

  return { success: "SignIn Succces Welcome Back" };
};

export const signUpAction = async (
  values: z.infer<typeof signUpSchema>,
): Promise<Record<string, string>> => {
  const validatedFields = signUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Something went wrong" };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existinguser = await getUserByEmail(email);

  if (existinguser) {
    // ERROR, can't make a user if the email already exist in database
    return { error: "Something went wrong" };
  }

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationByEmail(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: `Verification token has been sent` };
};

export async function verifyEmail(
  token: string,
): Promise<Record<string, string>> {
  const existingToken = await getVerificationTokenByToken(token);
  if (!existingToken) {
    return { error: "Token Doesn't exist" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) {
    return { error: "Token Has Expires" };
  }

  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) {
    return { error: "Email doesn't exist" };
  }

  await prisma.user.update({
    where: { id: existingUser.id },
    data: {
      email: existingToken.email,
      emailVerified: new Date(),
    },
  });

  await prisma.verificationToken.delete({
    where: {
      id: existingToken.id,
    },
  });

  return { success: "Success verifying your email" };
}

export async function resetPasswordAction(
  values: z.infer<typeof resetPasswordSchema>,
): Promise<Record<string, string>> {
  const validatedFields = resetPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Something went wrong" };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email) {
    return { error: "Email doesn't exit" };
  }

  // Generate token & send email
  const token = await generateResetPasswordTokenByEmail(existingUser.email);
  await sendResetPasswordEmail(token.email, token.token);

  return { success: "Reset password request successfully sent" };
}

export async function newPasswordAction(
  values: z.infer<typeof newPasswordSchema>,
  token: string | null,
): Promise<Record<string, string>> {
  if (!token) {
    return { error: "Token is Missing" };
  }

  const validatedFields = newPasswordSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid Credentials" };
  }

  const { password } = validatedFields.data;
  const existingToken = await getResetPasswordTokenByToken(token);
  if (!existingToken) {
    return { error: "Token Doesn't exist" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) {
    return { error: "Email Doesn't exist" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.update({
    where: { id: existingUser.id },
    data: { password: hashedPassword },
  });

  await prisma.resetPasswordToken.delete({
    where: { id: existingToken.id },
  });

  return { success: "Successfully changing to new password" };
}

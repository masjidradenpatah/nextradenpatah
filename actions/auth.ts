"use server"

import z from 'zod'
import bcrypt  from 'bcryptjs'
import { signUpSchema, signInSchema } from '@/schemas/authSchemas'
import { getUserByEmail } from "@/data/User";
import { prisma } from "@/lib/db";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const signInAction = async (values: z.infer<typeof signInSchema>): Promise<Record<string, string>> => {
  const validatedFields = signInSchema.safeParse(values);

  if(!validatedFields.success) {
    return { error: "Something went wrong" };
  }

  const {email, password} = validatedFields.data;

  const existingUser = await getUserByEmail(email);
  if(!existingUser) {
    // Invalid Email
    return { error: "Something went wrong" };
  }

  // TODO: Check if the email is Verified or not
  // if(existingUser.emailVerified) {}

  if(!existingUser.password) {
    // This email is using other provider (google or others)
    return { error: "Something went wrong" };
  }

  try {

    await signIn('credentials',
      {
        email,
        password,
        redirectTo: DEFAULT_LOGIN_REDIRECT
      });
  } catch (error) {
    if(error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }
    throw error;
  }

  return { success: "SignIn Succces Welcome Back" };
}

export const signUpAction = async (values: z.infer<typeof signUpSchema>) : Promise<Record<string, string>> => {
  const validatedFields = signUpSchema.safeParse(values);

  if(!validatedFields.success) {
    return { error: "Something went wrong" };
  }

  const { name, email, password} = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existinguser = await getUserByEmail(email);

  if(existinguser) {
    // ERROR, can't make a user if the email already exist in database
    return { error: "Something went wrong" };
  }

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  })

  return { success: `Success Creating new Account Welcome ${name}` };
}
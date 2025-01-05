import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';

import { prisma } from '@/lib/db'
import authConfig from '@/auth.config'


// the simple form
// export const {} = NextAuth({})

export const {
  handlers: {GET, POST},
  auth,
  signIn,
  signOut
} = NextAuth({
  callbacks: {
    async signIn({user, account, profile, email, credentials}) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      console.log('session before', session);
      session.user = token.user;
      console.log('session after', session);
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if(user) {
        token.user = user;
      }
       return token
    }
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig
});
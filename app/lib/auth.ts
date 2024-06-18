import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      name: string;
      email: string;
    };
  }

  interface User {
    id: number;
    name: string;
    email: string;
  }
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "enter your email", required: true },
        name: { label: "Name", type: "text", placeholder: "enter your name", required: true },
      },
      async authorize(credentials) {
        const existingUser = await prisma.user.findFirst({
          where: {
            email: credentials?.email,
          },
        });

        if (existingUser) {
          return {
            id: existingUser.id,
            name: existingUser.name,
            email: existingUser.email,
          };
        }

        try {
          const user = await prisma.user.create({
            data: {
              email: credentials?.email,
              name: credentials?.name,
            },
          });

          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        } catch (e) {
          console.error(e);
        }

        return null;
      },
    }),
  ],
  secret: process.env.JWT_SECRET || "secret",
  callbacks: {
    // @ts-ignore
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    // @ts-ignore
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as number;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
      }
      return session;
    },
  },
};

export default authOptions;

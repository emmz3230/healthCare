import prisma from "@/db";
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            email: { label: "Email", type: "text", placeholder: "enter your email", required: true },
            name: { label: "Name", type: "text", placeholder: "enter your name", required: true },
          },
          async authorize(credentials: any) {
            const existingUser = await prisma.user.findFirst({
                where: {
                    email: credentials.email
                }
            }); 

            if (existingUser) {
                return {
                    id: existingUser.id,
                    name: existingUser.name,
                    email: existingUser.email
                }
            }

            try {
                const user = await prisma.user.create({
                    data: {
                        email: credentials.email,
                        name: credentials.name
                    }
                });
            
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email
                }
            } catch(e) {
                console.error(e);
            }

            return null
          },
        })
    ],
    secret: process.env.JWT_SECRET || "secret",
    callbacks: {
        async jwt({ token, user }) {
          if (user) {
            token.id = user.id;
            token.name = user.name;
            token.email = user.email;
          }
          return token;
        },
        async session({ session, token }) {
          if (token) {
            session.user.id = token.id;
            session.user.name = token.name;
            session.user.email = token.email;
          }
          return session;
        },
    }
  }
  
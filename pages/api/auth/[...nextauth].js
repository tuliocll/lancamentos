import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import prisma from "../../../lib/prisma";

export default NextAuth({
  cookies: {
    secure: process.env.NODE_ENV && process.env.NODE_ENV === "production",
  },
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
  },
  theme: {
    logo: "https://user-images.githubusercontent.com/28990589/34908095-57a48cce-f83f-11e7-87d2-7579d0be5740.jpg",
    colorScheme: "light",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email,
            password: credentials.password,
          },
        });

        if (!user) {
          return null;
        }

        delete user.password;

        return user;
      },
    }),
  ],
});

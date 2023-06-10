import { prisma } from "@/app/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GrihubProvider from "next-auth/providers/github";

if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) {
    throw new Error('Environment variables GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET are required');
}

const options: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GrihubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        })
    ]
};

const handler = NextAuth(options);

export const GET = handler;
export const POST = handler;
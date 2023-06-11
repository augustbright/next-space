import { prisma } from "@/app/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export const POST = async (req: NextRequest) => {
    const session = await getServerSession(authOptions);
    if (!session) {
        return new NextResponse("No session found", { status: 401 });
    }

    const email = session.user?.email;
    if (!email) {
        return new NextResponse("No email found in session", { status: 401 });
    }

    const user = await prisma.user.findUnique({
        where: { email }
    });

    if (!user) {
        return new NextResponse("No user found", { status: 401 });
    }

    const { content } = await req.json();
    const post = await prisma.post.create({
        data: {
            content: content as string,
            author: {
                connect: {
                    id: user.id
                }
            }
        }
    });

    return NextResponse.json(post);
};

export const GET = async () => {
    const posts = await prisma.post.findMany();
    return NextResponse.json(posts);
};
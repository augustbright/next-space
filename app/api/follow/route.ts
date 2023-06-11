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

    const { targetUserId } = await req.json()

    const follow = await prisma.follow.create({
        data: {
            followerId: user.id,
            followingId: targetUserId
        }
    });

    return NextResponse.json(follow);
};

export const DELETE = async (req: NextRequest) => {
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

    const targetUserId = req.nextUrl.searchParams.get("targetUserId");
    if (!targetUserId) {
        throw new Error("No targetUserId found in query params");
    }

    await prisma.follow.delete({
        where: {
            followerId_followingId: {
                followerId: user.id,
                followingId: targetUserId
            }
        }
    });

    return new NextResponse(null, { status: 204 });
};
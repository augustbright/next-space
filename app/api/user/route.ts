import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "@/app/prisma";

export const PUT = async (req: NextRequest) => {
    const body = await req.json();
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;

    if (!email) {
        return NextResponse.error();
    }

    if (!body) {
        return NextResponse.error();
    }

    console.log('UPDATE', email, body);
    const user = await prisma.user.update({
        where: { email },
        data: body
    });

    return NextResponse.json(user);
};
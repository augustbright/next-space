import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { FollowButton } from "@/app/component/follow-button";
import { prisma } from "@/app/prisma";
import { Follow } from "@prisma/client";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";

type TProps = {
    params: {
        id: string;
    }
};

export async function generateMetadata({ params: { id } }: TProps): Promise<Metadata> {
    const user = await prisma.user.findUnique({ where: { id } });

    return {
        title: (user?.name || 'No Name') + ' | Next Space',
    };
};

export default async function UserPage({ params: { id } }: TProps) {
    const user = await prisma.user.findUnique({ where: { id } });

    if (!user) {
        throw new Error(`Cannot find user with id: ${id}`);
    }

    let follow: Follow | null = null;
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    if (email) {
        const user = await prisma.user.findUnique({ where: { email } });
        if (user) {
            follow = await prisma.follow.findUnique({
                where: {
                    followerId_followingId: {
                        followerId: user.id,
                        followingId: id,
                    }
                }
            });
        }

    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-800 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center space-x-5">
                    <div className="flex flex-col gap-4">
                        {user.image && (
                            <Image width={32} height={32} src={user.image} alt="User avatar" className="w-16 h-16 object-cover rounded-full border-2 dark:border-gray-600 border-gray-200" />
                        )}
                        <FollowButton targetUserId={user.id} isFollowing={!!follow} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{user.name}</h2>
                        {user.age && <p className="text-gray-500 dark:text-gray-400">Age: {user.age}</p>}
                        <p className="text-gray-500 dark:text-gray-400">Email: {user.email}</p>
                        <p className="text-gray-500 dark:text-gray-400">Email status: {user.emailVerified ? 'Verified' : 'Not Verified'}</p>
                    </div>
                </div>
                {user.bio && (
                    <div className="mt-5">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Bio</h3>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">{user.bio}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
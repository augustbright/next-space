'use client';

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export const AuthButton = () => {
    const session = useSession();

    if (session.status === 'loading') {
        return <>...</>
    }

    if (session.status === 'authenticated') {
        return (
            <div className="flex gap-4">
                <Link href="/dashboard">
                    <Image
                        className="rounded-full"
                        alt="Profile image"
                        src={session.data.user?.image || ''}
                        width={32}
                        height={32}
                    />
                </Link>
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        );
    }

    return <button onClick={() => signIn()}>Sign in</button>;
};
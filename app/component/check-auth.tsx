'use client'

import { useSession } from "next-auth/react";

type TProps = {
    children: React.ReactNode;
};

export const CheckAuth = ({ children }: TProps) => {
    const session = useSession();

    if (session.status === "authenticated") {
        return <>{children}</>;
    } else {
        return <></>;
    }
}
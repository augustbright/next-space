import Link from "next/link";
import { AuthButton } from "./auth-button";

export const Nav = () => {
    return (
        <nav className="flex gap-8 h-24 items-center justify-start bg-teal-500 p-6">
            <div>
                <Link href="/">
                    Next Space
                </Link>
            </div>
            <ul className="grow flex justify-end gap-4">
                <li>
                    <Link href="/users">
                        Users
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
            </ul>
            <div className="flex justify-end">
                <AuthButton />
            </div>
        </nav>
    );
};
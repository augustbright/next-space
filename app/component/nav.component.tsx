import Link from "next/link";

export const Nav = () => {
    return (
        <nav className="flex items-center justify-start bg-teal-500 p-6">
            <div>
                <Link href="/">
                    Next Space
                </Link>
            </div>
            <ul className="grow flex justify-end">
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
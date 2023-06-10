import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type TProps = {
    user: User;
};
export const UserCard = ({ user }: TProps) => {
    return (
        <Link href={`/users/${user.id}`}>
            <div className="border hover:border-teal-400 p-4 rounded-md shadow-lg max-w-md mx-auto">
                {user.image && <Image src={user.image} width={32} height={32} alt={user.name || ''} className="h-24 w-24 rounded-full mx-auto" />}
                <div className="mt-2 text-center">
                    <h2 className="text-lg font-semibold">{user.name || 'No Name'}</h2>
                    {user.age && <p className="text-gray-500">{`Age: ${user.age}`}</p>}
                    <p className="text-gray-500">{user.email || 'No Email'}</p>
                    <p className="text-gray-500">{user.emailVerified ? 'Email Verified' : 'Email Not Verified'}</p>
                </div>
                {user.bio && <p className="mt-2 text-gray-700 text-sm">{user.bio}</p>}
            </div>
        </Link>
    );
};
import { Post, User } from "@prisma/client";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

type TProps = {
    post: Post;
    user: User;
}
export const PostCard = ({ post, user }: TProps) => {
    return (
        <div className="my-2 bg-white rounded-md shadow-md dark:bg-gray-800 p-4 mx-4 sm:mx-24">
            <Link href={`/users/${user.id}`}>
                <h2 className="text-lg font-bold dark:text-white">
                    {user.name || 'Anonymous'}
                </h2>
            </Link>
            {user.image && (
                <Image
                    width={48}
                    height={48}
                    src={user.image}
                    alt={user.name || 'Anonymous'}
                    className="w-12 h-12 rounded-full"
                />
            )}
            <p className="mt-2 text-gray-600 dark:text-gray-300">{post.content}</p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Posted on: {moment(post.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
            </p>
        </div>
    );
};
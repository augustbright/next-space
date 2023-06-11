import { Post, User } from "@prisma/client";
import moment from "moment";
import Image from "next/image";

type TProps = {
    post: Post;
    user: User;
}
export const PostCard = ({ post, user }: TProps) => {
    return (
        <div className="p-4 my-2 bg-white rounded-md shadow-md dark:bg-gray-800 w-auto md:w-3/4">
            <h2 className="text-lg font-bold dark:text-white">
                {user.name || 'Anonymous'}
            </h2>
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
                Posted on: {new Date(post.createdAt).toLocaleDateString()}
            </p>
        </div>
    );
};
import { PageHeader } from "@/app/component/page-header";
import find from "lodash/find";

type TPost = {
    id: string,
    title: string,
    content: string,
    author: string,
    date: string
};

type TProps = {
    params: {
        id: string;
    }
};

export default async function Post({ params: { id } }: TProps) {
    const content = await fetch('http://localhost:3000/api/content', { cache: 'no-cache' });
    const posts: TPost[] = await content.json();

    const post = find(posts, { id });

    if (!post) {
        throw new Error(`Cannot find post with id: ${id}`);
    }

    return (
        <>
            <PageHeader title={post.title} />
            <main className="flex justify-center mt-8">
                <p>{post.content}</p>
            </main>
        </>
    );
};
import { PostCard } from "./component/post-card";
import { PostForm } from "./component/post-form";
import { prisma } from "./prisma";

export default async function Home() {
  const posts = await prisma.post.findMany({
    include: {
      author: true
    }
  });

  return (
    <main className="flex flex-col justify-between container">
      <PostForm />
      <div className="flex flex-col gap-4 items-center">
        {posts.map((post) => (
          <PostCard key={post.postId} post={post} user={post.author} />
        ))}
      </div>
    </main>
  )
}

import Link from "next/link";
import { Post } from "../types/post";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Posts Page',
    description: 'This is the posts page of the application.',
}

async function getPost(): Promise<Post[]> {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const res = await fetch(`http://localhost:2000/posts/`);
    const posts = await res.json();
    return posts;

}

export default async function PostsPage() {
    const posts = await getPost();
    return (
        <div className="container mx-auto p-4 ">
            <h1 className="text-3xl font-bold mb-6 ">Posts Page</h1>
            {posts.map((post: Post) => (
                <article key={post.id} className="mb-4 p-4 border rounded shadow hover:shadow-lg transition-shadow duration-300">
                    <h2 className="text-xl font-bold mb-2 ">
                        <Link href={`/posts/${post.slug}`} className="text-blue-600 hover:underline ">
                            {post.title}
                        </Link>
                    </h2>
                    <p className="text-gray-600 ">{post.content}</p>
                    <p className="text-gray-400">By {post.author}</p>
                    <p className="text-gray-500">{post.description}</p>
                    
                </article>
                
            ))}
        </div>
    );
}

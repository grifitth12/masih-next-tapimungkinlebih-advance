async function getPost(slug:string) {
    const res = await fetch(`http://localhost:2000/posts/?slug=` + slug);
    const posts = await res.json();
    return posts[0];
}

export default async function PostPage({params}:{params: Promise<{slug:string}>}) {
    const {slug} = await params;
    const post = await getPost(slug);
    return (        
        <article className="mb-4 p-4 border rounded shadow hover:shadow-lg transition-shadow duration-300">
        <div className="container mx-auto p-4 ">
            <h1 className="text-3xl font-bold mb-6 text-blue-600">{post.title}</h1>
            <p className="text-gray-600 mb-4">{post.content}</p>
            <p className="text-gray-400 mb-2">By {post.author}</p>
            <p className="text-gray-500">{post.description}</p>
        </div>
        </article>
   
    );
}

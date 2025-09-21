export default async function CommentPage() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return (
        <div className="container mx-auto p-4 border-t mt-4 pt-4">
            <h1 className="text-2xl font-bold">Comments Content</h1>
        </div>
    )
}
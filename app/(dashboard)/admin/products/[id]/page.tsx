export default async function ProductsListPage({params}: {
    params: Promise<{id: string}>;
}) {
    const {id} = await params;
    console.log(id);
  return (
    <div>
      <h1 className="text-3xl font-bold">Products List Page</h1>
      <p className="mt-4">
        This is the products list page where you can see all products.
      </p>
    </div>
  );
}
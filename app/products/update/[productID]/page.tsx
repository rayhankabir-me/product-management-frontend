export default async function Update({
  params,
}: {
  params: { productID: string };
}) {
  return <h1>updating product - {params.productID}</h1>;
}

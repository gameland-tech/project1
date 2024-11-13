import { notFound } from "next/navigation";

interface P1 {
  params: { category: string; id: string };
  searchParams: {};
}

async function ProductId({ params }: P1) {
  // const {id} = params;

  const a = await params;
  console.log("=====>", a);

  if (parseInt(a.id) > 100) {
    notFound();
  }

  return (
    <>
      <h4> Product Id...</h4>
      <h4>
        {a.category} -- {a.id}
      </h4>
    </>
  );
}
export default ProductId;

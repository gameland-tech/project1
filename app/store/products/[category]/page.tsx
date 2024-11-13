interface P1 {
  params: { category: string };
  searchParams: {};
}

async function ProductId({ params }: P1) {
  // const {id} = params;

  const a = await params;
  console.log("=====>", a.category);

  return (
    <>
      <h4> category Id...</h4>
      <h4>{a.category}</h4>
    </>
  );
}
export default ProductId;

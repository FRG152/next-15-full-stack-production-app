const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  return <div></div>;
};

export default page;

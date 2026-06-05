export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="text-5xl flex justify-center items-center w-full">
      <h1>{decodeURIComponent(slug)}</h1>
    </div>
  ); 
}

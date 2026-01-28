export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // direct access of `params.id`.
  return <p>ID: {id}</p>
}
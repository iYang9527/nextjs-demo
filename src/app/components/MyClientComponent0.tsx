export default async function MyClientComponent0(){

    const response = await fetch("http://localhost:3001/api/blog");
    const data =  await response.json();
    // console.log(data);

    return (
        <div>
            <h1>Client Component 0</h1>

            <div>
                {data?.title}
            </div>
            <div>
                {data?.body}
            </div>
        </div>
    );
}
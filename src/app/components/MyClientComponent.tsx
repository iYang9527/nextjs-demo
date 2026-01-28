'use client'

import { useEffect, useState } from "react";

export default function MyClientComponent(){

    const [count, setCount] = useState(0);
    const [post, setPost] = useState<{title: string, body: string}|null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            // 等待两秒
            await new Promise(resolve => setTimeout(resolve, 2000));

            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            const data =  await response.json()
            console.log(data);
            setPost(data);
        }
        fetchPost();

        console.log("count changed", count);
    }, [count]);

    return (
        <div>
            <h1>Client Component </h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Count Up</button>

            <div>
                {post?.title}
            </div>
            <div>
                {post?.body}
            </div>
        </div>
    );
}
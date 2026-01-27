import MyButton from "@/app/components/MyButton";
import Image from "next/image";

function MyMain({ title }: { title: string }) {

  const newTitle = title + "!";

  return (
    <div>
      <h1>{newTitle}</h1>
    </div>
  );
}

function MyList(){
  return (
    <div>
      <h2>List</h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <MyMain title="Hello Next.js" />
      <MyMain title="Hello 2" />
      <MyList />
      <MyButton><span>Click me</span></MyButton>
      <Image src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png?fmt=auto&app=138&f=JPEG?w=500&h=500" alt="file" width={100} height={100} />
    </div>
  );
}

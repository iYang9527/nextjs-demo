import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-black">
            {/* <div>123</div>
            <Link href="/blog/1">blog1</Link>
            <Link href="/blog/2">blog2</Link> */}
            <div >{children}</div>
        </div>
  );
}
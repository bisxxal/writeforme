import Link from "next/link";

 
export default function Home() {
   
  return (
  <div>

    <h1>Hello Bishal</h1>
    <p>Welcome back</p>
    <Link href={`/sign-in`}>Get started</Link>

 

  </div>
  );
}

import Link from "next/link";

 
export default function Home() {
   
  return (
  <div className=" center min-h-screen  w-full">
 
    <p>Welcome back</p>
    <Link className=" buttonbg rounded-full p-4" href={`/sign-in`}>Get started</Link>
 
  </div>
  );
}

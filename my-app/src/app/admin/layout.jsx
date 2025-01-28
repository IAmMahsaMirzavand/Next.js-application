import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <div className="flex  justify-between">
      <div className="bg-slate-200 flex-1 pb-10">{children}</div>
      <div className="text-white bg-slate-500 flex-[0.2] min-h-screen">
        <div className="flex flex-col  h-80 justify-around items-center p-5">
          <Link href={"/admin/posts"}>
            <h2 className="bg-slate-400 p-4 rounded-xl min-w-36 text-center">Posts</h2>
          </Link>
          <Link href={"/admin/recipes"}>
            <h2 className="bg-slate-400 p-4 rounded-xl min-w-36 text-center">Recipes</h2>
          </Link>
          <Link href={"/admin/users"}>
            <h2 className="bg-slate-400 p-4 rounded-xl min-w-36 text-center">users</h2>
          </Link>
        </div>
      </div>
      {/* <div className="bg-slate-200">{children}</div> */}
    </div>
  );
}

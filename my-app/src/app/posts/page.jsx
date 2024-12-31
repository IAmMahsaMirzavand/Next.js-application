import dynamic from "next/dynamic";


const PostsList = dynamic(() => import("@/components/PostsList"), {
  loading: () => <p>Loading Posts...</p>, 
  ssr: false, 
});

export const metadata = {
  title: "Posts",
  description: "about posts ",
};

export default function PostsPage() {
  return (
    <div>
      <h1>Posts</h1>
      <div>
        <PostsList />
      </div>
    </div>
  );
}

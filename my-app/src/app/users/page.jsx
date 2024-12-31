import dynamic from "next/dynamic";


const UsersList = dynamic(() => import("@/components/UsersList"), {
  loading: () => <p>Loading Users...</p>, 
  ssr: false, 
});

export const metadata = {
  title: "Users",
  description: "about users ",
};

export default function UsersPage() {
  return (
    <div>
      <h1>Users</h1>
      <div>
        <UsersList />
      </div>
    </div>
  );
}

import { Box, CircularProgress } from "@mui/material";
import dynamic from "next/dynamic";


const UsersList = dynamic(() => import("@/components/UsersList"), {
  loading: () => <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", 
    bgcolor: "background.default",
  }}
>
  <CircularProgress />
</Box>, 
  ssr: false, 
});

export const metadata = {
  title: "Users",
  description: "about users ",
};

export default function UsersPage() {
  return (
    <div>
      {/* <h1>Users</h1> */}
      <div>
        <UsersList />
      </div>
    </div>
  );

}
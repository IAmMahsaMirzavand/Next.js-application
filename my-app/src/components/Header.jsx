// import Link from "next/link";

// const Header = () => {
//   const navArr = ["Home", "Users", "Posts", "Recipes", "Admin"];
//   return (
//     <div>
//       <div className="flex justify-between p-4 bg-gray-300">
//         <ul className="flex justify-evenly w-72">
//           {navArr.map((item) => (
//             <button key={item}>
//               <Link
//                 href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//                 style={{ textDecoration: "none", color: "inherit" }}
//               >
//                 {item}
//               </Link>
//             </button>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import Link from "next/link";

const Header = () => {
  const navArr = ["Home", "Users", "Posts", "Recipes", "Admin"];

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "space-between" }}>
          {navArr.map((item) => (
            <Button key={item} color="inherit" sx={{ textTransform: "none" }}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {item}
              </Link>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

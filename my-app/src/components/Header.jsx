import Link from "next/link";

const Header = () => {
  const navArr = ["Home", "Users", "Posts", "Recipes", "Admin"];
  return (
    <div>
      <div className="flex justify-between p-4 bg-gray-300">
        <ul className="flex justify-evenly w-72">
          {navArr.map((item) => (
            <button key={item}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {item}
              </Link>
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;

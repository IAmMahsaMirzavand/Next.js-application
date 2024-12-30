import Header from "../components/Header.jsx";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/users">Users</a>
            <a href="/posts">Posts</a>
            <a href="/recipes">Recipes</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}






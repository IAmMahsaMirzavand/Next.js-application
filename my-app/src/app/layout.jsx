import "./globals.css";

export const metadata = {
  title: "Next App",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
       
      </head>
      <body>{children}</body>
    </html>
  );
}





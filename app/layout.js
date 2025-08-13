import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-blue-500 text-white">
        {children}
      </body>
    </html>
  );
}

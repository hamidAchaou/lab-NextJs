import Link from "next/link";
import Counter from "./components/Counter";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/aboute">Aboute</Link>
          <Link href="/blog">Blog</Link>
        </nav>
        {children}
        <Counter />
        <h1>Footer</h1>
      </body>
    </html>
  );
}

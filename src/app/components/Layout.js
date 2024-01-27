// components/Layout.js
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <header className="bg-gray-800 text-white py-4">
        <nav className="text-center">
          <Link href="/">
            <span className="mx-2 hover:text-gray-300" role="link" tabIndex={0}>
              Home
            </span>
          </Link>
          <Link href="/about">
            <span className="mx-2 hover:text-gray-300" role="link" tabIndex={0}>
              About
            </span>
          </Link>
          <Link href="/work">
            <span className="mx-2 hover:text-gray-300" role="link" tabIndex={0}>
              Work
            </span>
          </Link>
          <Link href="/contact">
            <span className="mx-2 hover:text-gray-300" role="link" tabIndex={0}>
              Contact
            </span>
          </Link>
          <Link href="/blog">
            <span className="mx-2 hover:text-gray-300" role="link" tabIndex={0}>
              Blog
            </span>
          </Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>© 2024 My Portfolio</p>
      </footer>
    </div>
  );
}

import Link from "next/link";
import { useRouter } from "next/dist/client/router";

export function Layout({ children }) {
  const router = useRouter();

  return (
    <div className="page">
      <nav className="nav__bar">
        <div className="nav__title">My Blog</div>
        <div className="nav__links">
          <div
            className={`nav__link ${router.pathname === "/" ? "active" : ""}`}
          >
            <Link href="/">
              <a>All posts</a>
            </Link>
          </div>
          <div
            className={`nav__link ${
              router.pathname === "/posts/new" ? "active" : ""
            }`}
          >
            <Link href="/posts/new">
              <a>New post</a>
            </Link>
          </div>
        </div>
      </nav>
      <main className="main">{children}</main>
      <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  );
}

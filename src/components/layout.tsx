import Link from "next/link";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/protected">Protected</Link>
          </li>
        </ul>
      </nav>
      <main>
        <footer>
          <p>2023 Copyright by law in Utrecht</p>
        </footer>
      </main>
    </div>
  );
};
export default Layout;

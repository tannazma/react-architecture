import Link from "next/link";
import { ReactNode } from "react";
import DarkTheme from "./DarkTheme";

interface LayoutProps {
  children: ReactNode;
}

const Footer = () => {
  return (
    <div>
      <p>Made with ❤ at Mind Mingle!</p>
    </div>
  );
};

const NavBar = () => {
  return (
    <div>
      <DarkTheme variant="dark" />
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
    </div>
  );
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;

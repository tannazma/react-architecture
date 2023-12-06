import Link from "next/link";
import Layout from "./Layout";
import { ReactNode, useEffect, useState } from "react";

interface ProtectedPageProps {
  children: ReactNode;
}

const ProtectedPage = ({ children }: ProtectedPageProps) => {
  const [token, setToken] = useState<string | null>(null);

  // Check if there is a token.
  // If there is not a token, we want to not show the page
  // When this page loads, we want to check for that token

  useEffect(() => {
    // We want to write our logic to check if there is a token
    const tokenFromBrowser = localStorage.getItem("token");
    setToken(tokenFromBrowser);
  }, []);

  if (token === null) {
    return (
      <div>
        <Layout>
          <h1>🔒 NOT LOGGED IN!!</h1>
          <Link href="/login">Login Here</Link>
        </Layout>
      </div>
    );
  } else {
    return <div>{children}</div>;
  }
};

export default ProtectedPage;

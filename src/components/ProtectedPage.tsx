import Link from "next/link";
import Layout from "./Layout";
import { ReactNode } from "react";

interface ProtectedPageProps {
  children: ReactNode;
}

const ProtectedPage = ({ children }: ProtectedPageProps) => {
  return (
    <div>
      <Layout>
        <h1>🔒 NOT LOGGED IN!!</h1>
        <Link href="/login">Login Here</Link>
      </Layout>
    </div>
  );
};

export default ProtectedPage;

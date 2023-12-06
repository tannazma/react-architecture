import Layout from "@/components/Layout";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    // Log the user in
    const token = "fake-token"; // This would normally come from the server
    localStorage.setItem("token", token);
    router.push("/protected");
  };

  return (
    <Layout>
      <h1>Login</h1>
      <button onClick={handleLogin}>Click here to login</button>
    </Layout>
  );
};

export default Login;

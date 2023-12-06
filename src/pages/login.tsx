import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

interface FormValues {
  username: string;
  password: string;
}

const Login = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const handleLogin = (data: FormValues) => {
    console.log(data);
    // Log the user in
    const token = "fake-token"; // This would normally come from the server
    localStorage.setItem("token", token);
    router.push("/protected");
  };

  return (
    <Layout>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div>
          <label>
            Username
            <input id="username" {...register("username")}></input>
            {errors.username && errors.username?.message}
          </label>
          <label>
            Password
            <input
              id="password"
              type="password"
              {...register("password", { required: true })}
            ></input>
            {errors.password && errors.password?.message}
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </Layout>
  );
};

export default Login;

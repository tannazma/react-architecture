import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// interface FormValues {
//   username: string;
//   password: string;
// }

const formValuesSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(5),
});

type LoginFormInputs = z.infer<typeof formValuesSchema>;

const Login = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(formValuesSchema),
  });

  const handleLogin = (data: LoginFormInputs) => {
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
            <span className="error-msg">
              {errors.username && errors.username?.message}
            </span>
          </label>
          <label>
            Password
            <input
              id="password"
              type="password"
              {...register("password", { required: true })}
            ></input>
            <span className="error-msg">
              {errors.password && errors.password?.message}
            </span>
          </label>
        </div>
        <button type="submit" className="secondary">
          Login
        </button>
      </form>
    </Layout>
  );
};

export default Login;

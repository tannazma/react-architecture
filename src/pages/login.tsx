import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ToggleContent from "@/components/ToggleContent";

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
            {errors.username && (
              <span className="error-msg">{errors.username?.message}</span>
            )}
          </label>
          <label>
            Password
            <input
              id="password"
              type="password"
              {...register("password", { required: true })}
            ></input>
            {errors.password && (
              <span className="error-msg">{errors.password?.message}</span>
            )}
          </label>
        </div>
        <button type="submit" className="secondary">
          Login
        </button>
      </form>
      <ToggleContent title="Spoiler Alert">
        <p>Here is the spoil</p>
      </ToggleContent>
    </Layout>
  );
};

export default Login;

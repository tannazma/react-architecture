import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ToggleContent from "@/components/ToggleContent";
import Alert from "@/components/Alert";
import ImageComponent from "@/components/ImageComponent";

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
      <Alert variant="Success">file Uploaded successfully</Alert>
      <Alert variant="Warning">file warning</Alert>
      <Alert variant="Error">file not Uploaded </Alert>
      <ImageComponent
        variant="circle"
        href="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      />
      <ImageComponent
        variant="square"
        href="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      />
    </Layout>
  );
};

export default Login;

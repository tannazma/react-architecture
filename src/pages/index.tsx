import Article from "@/components/Article";
import Layout from "@/components/Layout";
import BetterButton from "../components/BetterButton";

const Home = () => {
  const textVar = "Text";

  return (
    <Layout>
      <BetterButton variant="primary">
        <span>Change the {textVar}</span>
      </BetterButton>
      <BetterButton variant="secondary">Another One</BetterButton>
      <Article title="Today, nothing." author="Mary" />
      <h1>Hello!</h1>
    </Layout>
  );
};
export default Home;

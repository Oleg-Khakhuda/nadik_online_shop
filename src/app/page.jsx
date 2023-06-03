import Head from "next/head";
import MainCategories from "../components/MainCategories/MainCategories";
import TopProducts from "@/components/TopProducts/TopProducts";

const Home = () => {
  return (
    <>
      <Head>
        <title>Nadik</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainCategories />
      <TopProducts />
    </>
  );
};

export default Home;

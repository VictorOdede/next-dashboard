import Head from "next/head";
import { Header } from "../components/Header";
import { TopCards } from "../components/TopCards";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-gray-200 min-h-screen">
        <Header />
        <TopCards />
      </main>
    </>
  );
}

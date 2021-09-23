import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hoogle Docs Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className="bg-gray-100 pb-10 px-10 ">
        <div className="max-w-3xl mx-auto">
          <div className="py-6">
            <h2 className="text-gray-700">Start a new document</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

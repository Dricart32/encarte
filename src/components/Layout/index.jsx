import Head from "next/head";
import NavBar from "../NavBar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
        <title>Poupatize</title>
      </Head>
      <div className="bg-red-100">
        <div className="min-h-full">
          <NavBar />
          <main className="-mt-32">
            <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
              <div className="bg-gray-100 rounded-lg shadow px-5 py-3 sm:px-4">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

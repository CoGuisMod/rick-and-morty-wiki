import { type AppType } from "next/app";

import { trpc } from "../utils/trpc";

/* Sections imports */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <div className="py-2" />
      <Footer />
    </>
  );
};

export default trpc.withTRPC(MyApp);

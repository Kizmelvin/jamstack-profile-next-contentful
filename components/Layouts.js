import Footer from "./Footer";
import Nav from "./Nav";
import Head from "next/head";

function Layouts({ children }) {
  return (
    <>
      <Head>
        <title> Ekene Eze</title>
      </Head>
      <Nav />
      <div className="container">
        <div className="main">{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default Layouts;

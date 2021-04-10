import Layouts from "../components/Layouts";
import "../style.css";
// import App from "next/app";

function MyApp({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}

export default MyApp;

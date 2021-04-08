import Footer from "./Footer";
import Nav from "./Nav";

function Layouts({ children }) {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="main">{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default Layouts;

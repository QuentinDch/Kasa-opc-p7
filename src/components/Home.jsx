import { Fragment } from "react";
import Navbar from "./navbar";
import Main from "./Main";
import Footer from "./Footer";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Main />
      <Footer />
    </Fragment>
  );
};

export default Home;

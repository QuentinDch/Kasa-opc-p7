import "../../sass/components/Main.scss";
import Banner from "../../components/Banner";
import bannerImg from "../../assets/imgBannerAboutPng.png";
import Display from "./Display";

const Main = () => {
  return (
    <main className="main">
      <Banner image={bannerImg} />
      <Display />
    </main>
  );
};

export default Main;

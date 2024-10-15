import "../../sass/components/Main.scss";
import Banner from "../../components/Banner";
import bannerImg from "../../assets/imgBannerAboutPng.png";

const Main = () => {
  return (
    <main className="main">
      <Banner image={bannerImg} />
    </main>
  );
};

export default Main;

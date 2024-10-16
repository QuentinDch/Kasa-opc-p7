import Banner from "../../components/Banner";
import bannerImg from "../../assets/imgBannerAboutWebP.webp";
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

import "../../sass/components/Main.scss";
import Banner from "../../components/Banner";
import bannerImg from "../../assets/imgBannerHomePng.png";
import Display from "./Display";
import Cards from "./Card";

const Main = () => {
  const title = "Chez vous, partout et ailleurs";

  return (
    <main className="main">
      <Banner title={title} image={bannerImg} overlay={true} />
      <Display />
      <Cards />
    </main>
  );
};

export default Main;

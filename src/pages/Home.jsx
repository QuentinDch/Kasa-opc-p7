import Banner from "../components/Banner";
import bannerImg from "../assets/imgBannerHomeWebP.webp";
import data from "../data/logements.json";
import Card from "../components/Card";

const Home = () => {
  const title = "Chez vous, partout et ailleurs";

  return (
    <main className="main">
      <Banner title={title} image={bannerImg} overlay={true} />
      <div className="grid">
        {data.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            cover={card.cover}
            title={card.title}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;

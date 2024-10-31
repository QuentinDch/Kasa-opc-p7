import Banner from "../components/Banner";
import bannerImg from "../assets/imgBannerAboutWebP.webp";
import data from "../data/collapse.json";
import Collapse from "../components/Collapse";

const About = () => {
  return (
    <main className="main">
      <Banner image={bannerImg} />
      <div className="display">
        {data.map((collapse) => (
          <Collapse
            key={collapse.id}
            title={collapse.title}
            content={collapse.content}
          />
        ))}
      </div>
    </main>
  );
};

export default About;

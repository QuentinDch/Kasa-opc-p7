import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Container from "../components/Container";
import Detail from "../components/Detail";
import data from "../data/logements.json";

const Accommodation = () => {
  const { id } = useParams();
  const accommodation = data.find((item) => item.id === id);

  return (
    <main>
      <Carousel accommodation={accommodation} />
      <Container accommodation={accommodation} />
      <Detail accommodation={accommodation} />
    </main>
  );
};

export default Accommodation;

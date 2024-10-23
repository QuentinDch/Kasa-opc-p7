import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import Container from "./Container";
import Detail from "./Detail";
import data from "../../data/logements.json";

const Main = () => {
  const { id } = useParams();
  const accommodation = data.find((item) => item.id === id);

  return (
    <main>
      <Carousel />
      <Container accommodation={accommodation} />
      <Detail />
    </main>
  );
};

export default Main;

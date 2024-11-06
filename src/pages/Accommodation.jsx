import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Container from "../components/Container";
import Detail from "../components/Detail";
import NotFound from "../pages/NotFound";
import data from "../data/logements.json";

const Accommodation = () => {
  const { id } = useParams();
  const accommodation = data.find((logement) => logement.id === id);

  if (!accommodation) {
    return <NotFound />;
  }

  return (
    <main>
      <Carousel accommodation={accommodation} />
      <Container accommodation={accommodation} />
      <Detail accommodation={accommodation} />
    </main>
  );
};

export default Accommodation;

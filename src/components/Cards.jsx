import "../sass/components/Cards.scss";
import data from "../data/logements.json";

function Cards() {
  return (
    <div className="grid">
      {data.map((card) => (
        <article key={card.id} className="card">
          <a href="#" aria-label={`Voir les détails de ${card.title}`}>
            <figure className="card-figure">
              <img src={card.cover} alt={card.title} />
              <figcaption>{card.title}</figcaption>
            </figure>
          </a>
        </article>
      ))}
    </div>
  );
}

export default Cards;

const Card = ({ cover, title }) => {
  return (
    <article className="card">
      <a href="#" aria-label={`Voir les détails de ${title}`}>
        <figure className="card-figure">
          <img src={cover} alt={title} />
          <figcaption>{title}</figcaption>
        </figure>
      </a>
    </article>
  );
};

export default Card;

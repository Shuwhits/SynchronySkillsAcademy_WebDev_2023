import "./Card.css";

function Card({ name, city, job }) {
  return (
    <div className="card">
      <h1>{name}</h1>
      <h2>{city}</h2>
      <h3>{job}</h3>
    </div>
  );
}

export default Card;

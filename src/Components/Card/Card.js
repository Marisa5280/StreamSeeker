import "./Cards.css";

const Card = ({ platform, title, artistName, id, thumbnailUrl, link }) => {
  // use platforms to render card for each platform, use platform to find link to song
  return (
    <div className="card" id={id}>
      <h2 className="card-title">{title}</h2>
      <h2 className="card-artist">{artistName}</h2>
      <img className="card-thumbnail" src={thumbnailUrl}></img>
      <href className="card-link">{link}</href>
      <p className="card-platform">{platform}</p>
    </div>
  );
};

export default Card;

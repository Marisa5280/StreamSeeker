import PropTypes from "prop-types";
import "./Card.css";

const handleSave = (props) => {
  const localKey = "saved";
  const saved = localStorage.getItem(localKey);
  console.log("saved", saved);


  if (saved) {
    const savedArr = JSON.parse(saved);
    const isItemAlreadySaved = savedArr.some(savedObj => savedObj.id === props.id && savedObj.platform === props.platform);
    if (!isItemAlreadySaved) {
      const updatedSavedArr = [...savedArr, props];
      localStorage.setItem(localKey, JSON.stringify(updatedSavedArr));
    } else {
      console.warn('Item already exists in local storage:', props);
    }
  } else {
    localStorage.setItem(localKey, JSON.stringify([props]));
  }
  return <Card {...props} />;
};

const Card = (props) => {
  const { platform, title, artistName, id, thumbnailUrl, link } = props;
  return (
    <div className="card" id={id}>
      <h2 className="card-title">{title}</h2>
      <h2 className="card-artist">{artistName}</h2>
      <img className="card-thumbnail" src={thumbnailUrl}></img>
      <a className="card-link" href={link}>
        {link}
      </a>
      <p className="card-platform">{platform}</p>
      <button className="card-save" onClick={() => handleSave(props)}>
        Save
      </button>
    </div>
  );
};

export default Card;

Card.propTypes = {
  platform: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
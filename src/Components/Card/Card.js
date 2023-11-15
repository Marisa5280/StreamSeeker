import PropTypes from "prop-types";
import "./Card.css";

const handleSave = (props) => {
  const localKey = "saved";
  const localData = localStorage.getItem(localKey);
  const saved = JSON.parse(localData);

  if (saved) {
    const isItemAlreadySaved = saved.some(
      (savedObj) =>
        savedObj.id === props.id && savedObj.platform === props.platform
    );
    if (!isItemAlreadySaved) {
      const updatedSavedArr = [...saved, props];
      localStorage.setItem(localKey, JSON.stringify(updatedSavedArr));
    } else {
      console.warn("Item already exists in local storage:", props);
    }
  } else {
    localStorage.setItem(localKey, JSON.stringify([props]));
  }
};

const Card = ({
  platform,
  title,
  artistName,
  id,
  thumbnailUrl,
  link,
  isSavedView,
  handleRemove,
}) => {
  const streamResult = { platform, title, artistName, id, thumbnailUrl, link };
  const handleClick = () =>
    isSavedView ? handleRemove(id) : handleSave(streamResult);
  return (
    <div className="card" id={id}>
      <h2 className="card-title">{title}</h2>
      <h2 className="card-artist">{artistName}</h2>
      <img className="card-thumbnail" src={thumbnailUrl}></img>
      <a className="card-link" href={link}>
        {link}
      </a>
      <h3 className="card-platform">{platform}</h3>
      <button className="card-save" onClick={handleClick}>
        {isSavedView ? "Remove" : "Save"}
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
  isSavedView: PropTypes.bool,
  handleRemove: PropTypes.func,
};

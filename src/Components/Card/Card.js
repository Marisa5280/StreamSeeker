import PropTypes from "prop-types";
import "./Card.css";
import { useState } from "react";

const handleSave = (props, setSavedStreamMsg) => {
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
      setSavedStreamMsg('Stream Saved!');
      setTimeout(() => {
        setSavedStreamMsg(null);
      }, 3000);
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
  const [savedStreamMsg, setSavedStreamMsg] = useState(null);
  const streamResult = { platform, title, artistName, id, thumbnailUrl, link };
  const handleClick = () =>
    isSavedView ? handleRemove(id) : handleSave(streamResult, setSavedStreamMsg);
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
      {savedStreamMsg && <p className="save-stream-msg">{savedStreamMsg}</p>}
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

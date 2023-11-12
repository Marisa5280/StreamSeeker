import PropTypes from "prop-types";
import "./Saved.css";
import Card from "../Card/Card";
import { useState } from "react";

const localKey = "saved";

const Saved = () => {
  const localData = localStorage.getItem(localKey);
  const data = JSON.parse(localData);
  return (
    <div className="results-container">
      <SavedCards data={data} />
    </div>
  );
};

const SavedCards = ({ data }) => {
  const [streams, setStreams] = useState(data);
  const handleRemove = (id) => {
    const filteredStreams = streams.filter(
      (streamResult) => streamResult.id !== id
    );
    const localValue = filteredStreams.length ? filteredStreams : null;
    const stringifiedLocalValue = JSON.stringify(localValue);
    localStorage.setItem(localKey, stringifiedLocalValue);
    setStreams(localValue);
  };
  return streams ? (
    streams.map((streamResult) => {
      const cardKey = `${streamResult.id}-${streamResult.platform}`;
      return (
        <Card
          key={cardKey}
          {...streamResult}
          isSavedView
          handleRemove={handleRemove}
        />
      );
    })
  ) : (
    <p>No saved stream links! Add some!</p>
  );
};

export default Saved;

SavedCards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      platform: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      artistName: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};

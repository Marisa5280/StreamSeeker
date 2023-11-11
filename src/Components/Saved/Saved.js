import PropTypes from "prop-types";
import "./Saved.css";
import Card from "../Card/Card";

const Saved = () => {
  const data = localStorage.getItem('saved');
  return (
    <div className="results-container">
      <SavedCards data={data} />
    </div>
  );
};

const SavedCards = ({ data }) => {
  console.log('saved0', data[0]);
  return !data ? (
    <p>No saved stream links! Add some!</p>
  ) : (
    data.map((propsObj) => {
      const { platform, id, title, artistName, thumbnailUrl, link } = propsObj;
     return <Card
        key={platform}
        platform={platform}
        title={title}
        artistName={artistName}
        thumbnailUrl={thumbnailUrl}
        id={id}
        link={link}
      />;
    })
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
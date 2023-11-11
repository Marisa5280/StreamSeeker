import PropTypes from "prop-types";
import "./Saved.css";
import Card from "../Card/Card";

const Saved = () => {
  const savedData = localStorage.getItem("saved");
  const data = savedData ? JSON.parse(savedData) : [];
  return (
    <div className="results-container">
      <SavedCards data={data} />
    </div>
  );
};

const SavedCards = ({ data }) =>
  data.length ? (
    data.map((props) => <Card {...props} />)
  ) : (
    <p>No saved stream links! Add some!</p>
  );
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

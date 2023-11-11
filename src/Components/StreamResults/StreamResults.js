import PropTypes from "prop-types";
import Card from "../Card/Card";
import "./StreamResults.css";

const StreamResults = ({ urlData, altData }) => {
  const data = urlData ? urlData : altData;
  return (
    <div className="results-container">
      {data && <StreamCards data={data} />}
    </div>
  );
};

const StreamCards = ({ data }) => {
  const { entitiesByUniqueId, linksByPlatform } = data;
  const resultKeys = Object.keys(entitiesByUniqueId);

  return resultKeys.map((key) => {
    const { platforms, id, title, artistName, thumbnailUrl } =
      entitiesByUniqueId[key];
    return platforms.map((platform) => (
      <Card
        key={platform}
        platform={platform}
        title={title}
        artistName={artistName}
        thumbnailUrl={thumbnailUrl}
        id={id}
        link={linksByPlatform[platform].url}
      />
    ));
  });
};

export default StreamResults;

StreamResults.propTypes = {
  urlData: PropTypes.shape({
    platform: PropTypes.string,
    title: PropTypes.string,
    artistName: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    id: PropTypes.string,
    link: PropTypes.string,
  }),
  altData: PropTypes.shape({
    platform: PropTypes.string,
    title: PropTypes.string,
    artistName: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    id: PropTypes.string,
    link: PropTypes.string,
  }),
};

StreamCards.propTypes = {
  data: PropTypes.shape({
    entitiesByUniqueId: PropTypes.object,
    linksByPlatform: PropTypes.object,
  }),
};
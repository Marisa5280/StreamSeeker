import "./Saved.css";

const Saved = () => {
  const data = localStorage.getItem(localKey);
  return (
    <div className="results-container">
      <SavedCards data={data} />
    </div>
  );
};

const SavedCards = ({ data }) => {
  return !data ? (
    <p>No saved stream links! Add some!</p>
  ) : (
    data.map((propsObj) => {
      const { platform, id, title, artistName, thumbnailUrl, link } = propsObj;
      <Card
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

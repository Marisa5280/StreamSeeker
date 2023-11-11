import "./Card.css";

const handleSave = (props) => {
  const localKey = "saved";
  const saved = localStorage.getItem(localKey);
  console.log("saved", saved);


  if (saved) {
    const savedArr = JSON.parse(saved);
    const isItemAlreadySaved = savedArr.includes(props);
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


  // [
  //   {
  //     platform: "amazonStore",
  //     title: "dashstar* (VIP)",
  //     artistName: "Knock2",
  //     thumbnailUrl: "https://m.media-amazon.com/images/I/51nxztXYmoL.jpg",
  //     id: "B0BRMQPH4V",
  //     link: "https://amazon.com/dp/B0BRMQPH4V",
  //   },
  //   {
  //     platform: "amazonMusic",
  //     title: "dashstar* (VIP)",
  //     artistName: "Knock2",
  //     thumbnailUrl: "https://m.media-amazon.com/images/I/51nxztXYmoL.jpg",
  //     id: "B0BRMQPH4V",
  //     link: "https://music.amazon.com/albums/B0BRMDR92C?trackAsin=B0BRMQPH4V",
  //   },
  // ];
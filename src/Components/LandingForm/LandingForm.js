import { useState } from "react";

const LandingForm = () => {
  const [urlData, setUrlData] = useState(null);
  const [altData, setAltData] = useState(null);

  const services = [
    spotify,
    itunes,
    appleMusic,
    youtube,
    youtubeMusic,
    google,
    googleStore,
    pandora,
    deezer,
    tidal,
    amazonStore,
    amazonMusic,
    soundcloud,
    napster,
    yandex,
    spinrilla,
    audius,
    anghami,
    boomplay,
    audiomack,
  ];

  const urlInput = (
    <input
      className="url-input"
      type="text"
      placeholder="song url"
      value={urlData}
      onChange={(event) => setUrlData(event.target.value)}
    />
  );

  const altForm = (
    <form className="alt-form">
      <select className="alt-service-select">
        {/* will need to iterate through services arr. and create <option> for each  */}
      </select>
      <select className="alt-type-select"></select>
      <input className="alt-id-input"></input>
    </form>
  );
  // move fetch out of use effect and into form component
  const submitStreamQuery = (event) => {
    event.preventDefault();
    // condit. submits one api call or the other based on which state is truthy
    clearInput();
  };

  const clearForms = () => {
    setUrlData(null);
    setAltData(null);
  };

  return (
    <div className="Landing-form-wrapper">
      <form className="url-form">{urlInput}</form>
      {altForm}
      <button onClick={submitStreamQuery}>SEARCH</button>
    </div>
  );
};

export default LandingForm;

// useEffect(() => {
//   const fetchStreams = async () => {
//     const streamData = await getStreams();
//     setStreams(streamData);
//   };
//   fetchStreams();
// }, []);

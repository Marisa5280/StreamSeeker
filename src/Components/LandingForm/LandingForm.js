import { useState } from "react";

const LandingForm = () => {
  const [urlData, setUrlData] = useState(null);
  const [altData, setAltData] = useState(null);

  const services = [
    "spotify",
    "itunes",
    "appleMusic",
    "youtube",
    "youtubeMusic",
    "google",
    "googleStore",
    "pandora",
    "deezer",
    "tidal",
    "amazonStore",
    "amazonMusic",
    "soundcloud",
    "napster",
    "yandex",
    "spinrilla",
    "audius",
    "anghami",
    "boomplay",
    "audiomack",
  ];

  const serviceOptions = services.map((service) => {
    return (
      <option
        className={`service-opt-${service}`}
        value={service}
        key={service}
      >
        {service}
      </option>
    );
  });

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
        <option>streaming service</option>
        {serviceOptions}
      </select>
      <select className="alt-type-select">
        <option className="alt-opt" value={"type"}>
          type
        </option>
        <option className="alt-opt-song" value={"song"}>
          song
        </option>
        <option className="alt-opt-album" value={"album"}>
          album
        </option>
      </select>
      <input className="alt-id-input" placeholder="song id"></input>
    </form>
  );
  // move fetch out of use effect and into form component
  const submitStreamQuery = (event) => {
    event.preventDefault();
    // condit. submits one api call or the other based on which state is truthy
    clearForms();
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

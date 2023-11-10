import { useState } from "react";
import { getUrlStreams, getAltStreams } from "../../apicalls";
import './LandingForm.css';

const LandingForm = ({ setUrlData, setAltData }) => {
  const [url, setUrl] = useState("");
  const [altService, setAltService] = useState(null);
  const [altType, setAltType] = useState(null);
  const [altId, setAltId] = useState(null);

  const fetchUrlStreams = async (url) => {
    const urlStreamData = await getUrlStreams(url);
    setUrlData(urlStreamData);
  };

  const fetchAltStreams = async (type, service, id) => {
    const altStreamData = await getAltStreams(type, service, id);
    setAltData(altStreamData);
  };

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
      value={url}
      onChange={(event) => setUrl(event.target.value)}
    />
  );

  const altForm = (
    <form className="alt-form">
      <select
        className="alt-service-select"
        onChange={(event) => setAltService(event.target.value)}
      >
        <option>streaming service</option>
        {serviceOptions}
      </select>
      <select
        className="alt-type-select"
        onChange={(event) => setAltType(event.target.value)}
      >
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
      <input
        className="alt-id-input"
        placeholder="song id"
        onChange={(event) => setAltId(event.target.value)}
      ></input>
    </form>
  );
  // check that values have actually been selected, if not show message to fill values
  const submitStreamQuery = (event) => {
    event.preventDefault();
    if (url) {
      fetchUrlStreams(url);
    } else if (altService && altType && altId) {
      fetchAltStreams(altType, altService, altId);
    }
    clearForms();
  };

  const clearForms = () => {
    setUrlData(null);
    setAltData(null);
  };

  return (
    <div className="Landing-form-wrapper">
      <form
        className="url-form"
        onChange={(event) => setUrl(event.target.value)}
        value={url}
        placeholder="url from a streaming service"
      >
        {urlInput}
      </form>
      {altForm}
      <button onClick={submitStreamQuery}>SEARCH</button>
    </div>
  );
};

export default LandingForm;

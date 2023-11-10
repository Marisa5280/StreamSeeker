import "./App.css";
import { useState } from "react";
import LandingForm from "../LandingForm/LandingForm";

function App() {
  const [streams, setStreams] = useState(null);
  const [urlData, setUrlData] = useState(null);
  const [altData, setAltData] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-name">STREAM SEEKER</h1>
        {streams && console.log("streams", streams)}
        {/* HEADER comp: text as <Link>, <navLink> to saved path */}
      </header>
      <LandingForm
        urlData={urlData}
        setUrlData={setUrlData}
        altData={altData}
        setAltData={setAltData}
      />
      {/* response page with states of data, and saved+setter */}
      {/* saved page: pass saved+setter */}
    </div>
  );
}

export default App;

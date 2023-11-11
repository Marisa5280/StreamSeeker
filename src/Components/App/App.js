import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingForm from "../LandingForm/LandingForm";
import StreamResults from "../StreamResults/StreamResults";

function App() {
  const [urlData, setUrlData] = useState(null);
  const [altData, setAltData] = useState(null);
  console.log('app-url-data', urlData);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-name">STREAM SEEKER</h1>
        {/* HEADER comp: text as <Link>, <navLink> to saved path */}
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <LandingForm
              urlData={urlData}
              setUrlData={setUrlData}
              altData={altData}
              setAltData={setAltData}
            />
          }
        />
        <Route
          path="/results"
          element={<StreamResults urlData={urlData} altData={altData} />}
        />
        <Route
          path="/saved"
          element={<p>hello</p>}
        />
      </Routes>
      {/* response page with states of data, and saved+setter */}
      {/* saved page: pass saved+setter */}
    </div>
  );
}

export default App;

import "./App.css";
import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import LandingForm from "../LandingForm/LandingForm";
import StreamResults from "../StreamResults/StreamResults";
import Saved from "../Saved/Saved";

function App() {
  const [urlData, setUrlData] = useState(null);
  const [altData, setAltData] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <NavLink to={'/'} className="header-name"><h1>STREAM SEEKER</h1> </NavLink>
        <NavLink to={'/saved'} className='header-link-saved'> My Saved Streams</NavLink>
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
          element={<Saved />}
        />
        <Route path='/*' element={<p>the page you are looking for does not exist</p>} />
      </Routes>
    </div>
  );
}

export default App;

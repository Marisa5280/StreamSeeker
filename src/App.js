import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { getStreams } from "./apicalls";

function App() {
  const [streams, setStreams] = useState(null);

  useEffect(() => {
    const fetchStreams = async () => {
      const streamData = await getStreams();
      setStreams(streamData);
    };
    fetchStreams();
  }, []);

// move fetch out of use effect and into form component

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-name">STREAM SEEKER</h1>
        {streams && console.log("streams", streams)}
        {/* HEADER comp: text as <Link>, <navLink> to saved path */}
      </header>
      {/* Landing Page route, wrapper comp contains: form comp */}
    </div>
  );
}

export default App;

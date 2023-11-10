import Card from "../Cards/Cards";
import "./StreamResults.css";

function StreamResults({ urlData, altData }) {
  return (
    <div className="results-container">
      {!!encounters.length ? (
        <EncounterCards encounters={encounters} />
      ) : (
        <h2>No encounters yet, add encounters!</h2>
      )}
    </div>
  );
}

function StreamCards({  }) {
  return encounters.map((encounter) => {
    return (
      <Card
        location={encounter.title}
        description={encounter.description}
        id={encounter.id}
        key={encounter.id}
        addEncounter={addEncounter}
      />
    );
  });
}

export default StreamResults;
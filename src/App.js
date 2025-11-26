import "./App.css";
import GridTable from "./GridTable";


// App.js:
// Components that make up the entire app.
// Loads the GridTable and builds the screen.

function App(){
  return (

  <div>
      <h1
        style={{
          margin: "40px auto 20px",
          textAlign: "center",
        }}
      >
        User Grid App
      </h1>
        <GridTable /> {/* call the GridTable */}
  </div>
  );
}

export default App;


import React from "react";
import "./App.css";
import GridTable from "./GridTable";

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
        <GridTable />
  </div>
  );
}

export default App;


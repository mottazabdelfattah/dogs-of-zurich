import { useState, useEffect } from "react";
import Papa from "papaparse";
import "./App.css";
import dataset from "./assets/20200306_hundehalter.csv";
import GridView from "./components/GridView";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(dataset)
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            setData(result.data);
          },
        });
      })
      .catch((error) => {
        console.error("error loading the CSV file:", error);
      });
  }, []);

  return (
    data.length > 0 && (
      <div className="App">
        <h1>Dogs of Zürich</h1>
        <GridView data={data} />
      </div>
    )
  );
}

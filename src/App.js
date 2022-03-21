import "bootswatch/dist/lux/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Results from "./components/Results/Results";

function App() {
  const [fakeApiResults, setFakeApiResults] = useState([]);
  const [query, setQuery] = useState("");

  const getUsersfromApi = async () => {
    await axios
      .get("https://randomuser.me/api/?results=50")
      .then((res) => {
        console.log(res.data.results);
        setFakeApiResults(res.data.results);
      })
      .catch((err) => console.log("Error", err));
  };

  const getInputData = (data) => {
    setQuery(data);
  };

  useEffect(() => {
    getUsersfromApi();
  }, []);

  return (
    <div className="App">
      <Container fluid="md" className="mt-5">
        <SearchBar search={getInputData} />
        <Results results={fakeApiResults} query={query} />
      </Container>
    </div>
  );
}

export default App;

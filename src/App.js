import React, { useState, useEffect } from "react";
import "./App.css";
import mondaySdk from "monday-sdk-js";
import "monday-ui-react-core/dist/main.css";
import Layout from "./components/Layout";

const monday = mondaySdk();

const App = () => {
  const [context, setContext] = useState();

  useEffect(() => {
    monday.execute("valueCreatedForUser");
    monday.listen("context", (res) => {
      setContext(res.data);
    });
  }, []);

  if (context) {
    sessionStorage.setItem('boardId', context.boardId);
    const storedBoardId = sessionStorage.getItem('boardId');
    // console.log("s boardid", storedBoardId);
    return (
      <div className="App">
        <Layout />
      </div>
    );
  } else {
    // Render a loading indicator while waiting for the context
    return (
      <div className="loading-indicator">
        Loading...
      </div>
    );
  }
};

export default App;













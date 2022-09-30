import React from "react";
import VideoGrid from "./components/VideoGrid";
import VideoDetails from "./components/VideoDetails";
import { Route, Switch } from "react-router-dom";
import "./App.css";

export const config = {
  endpoint: `https://6671dc74-126d-4939-b36b-ae44bd532dfb.mock.pstmn.io/v1`,
};

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={VideoGrid}/>
        <Route exact path="/video/:id" component={VideoDetails}/>
      </Switch>
    </div>
  );
}

export default App;



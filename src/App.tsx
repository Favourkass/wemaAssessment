import React from "react";
import "./App.css";
import CentralNav from "./navigation/centralNav";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <CentralNav />
    </RecoilRoot>
  );
}

export default App;

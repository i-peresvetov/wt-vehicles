import React from "react";

import VehicleList from "./components/VehicleList";
import VehicleFilter from "./components/VehicleFilter";
import BaseStats from "./components/BaseStats";
import HeaderLine from "./components/HeaderLine";
import VehicleFilterInline from "./components/VehicleFilterInline";

function App() {
  return (
    <div className="App">
      <HeaderLine />
      {/* <BaseStats /> */}
      <main>
        {/* <VehicleFilterInline /> */}
        <VehicleFilter />
        <VehicleList />
      </main>
    </div>
  );
}

export default App;

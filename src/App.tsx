import React from "react"

import VehicleList from "./components/VehicleList"
import VehicleFilter from "./components/VehicleFilter"
import BaseStats from "./components/BaseStats"

function App() {
  return (
    <div className="App">
      <BaseStats />
      <VehicleFilter />
      <VehicleList />
    </div>
  )
}

export default App

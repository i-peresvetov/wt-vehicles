import React from "react"

import VehicleList from "./components/VehicleList"
import VehicleFilter from "./components/VehicleFilter"
import BaseStats from "./components/BaseStats"
import HeaderLine from "./components/HeaderLine"

function App() {
  return (
    <div className="App">
      {/* <HeaderLine /> */}
      {/* <BaseStats /> */}
      <VehicleFilter />
      <VehicleList />
    </div>
  )
}

export default App

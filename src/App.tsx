import React from "react"
import VehicleList from "./components/VehicleList"
import { fakeDb } from "./api/fakeApi"
import VehicleFilter from "./components/VehicleFilter"
import BaseStats from "./components/BaseStats"

function App() {
  return (
    <div className="App">
      <BaseStats/>
      <VehicleFilter />
      <VehicleList vehicles={fakeDb} />
    </div>
  )
}

export default App

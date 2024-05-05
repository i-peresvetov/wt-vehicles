import React from "react"
import VehicleList from "./components/VehicleList"
import { fakeDb } from "./api/fakeApi"
import VehicleFilter from "./components/VehicleFilter"

function App() {
  return (
    <div className="App">
      <VehicleFilter />
      <VehicleList vehicles={fakeDb} />
    </div>
  )
}

export default App

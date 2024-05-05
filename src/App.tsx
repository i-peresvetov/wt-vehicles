import React from 'react';
import VehicleList from './components/VehicleList';
import { fakeDb } from './api/fakeApi';

function App() {
  return (
    <div className="App"><VehicleList vehicles={fakeDb}/></div>
  );
}

export default App;

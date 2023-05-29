import React from 'react';
import Canvas from './canvas';
import Customiser from './pages/Customiser';
import Home from './pages/Home';

import { useSnapshot } from 'valtio';
import state from './store';
import Marketplace from './pages/Marketplace';
import CreateListing from './pages/CreateListing';

function App() {

  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <CreateListing />
      <Customiser />
      <Marketplace />
    </main>
  )
}

export default App
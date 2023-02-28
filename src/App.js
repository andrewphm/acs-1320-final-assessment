import React, { useState } from 'react';
import './App.css';
import BandList from './components/BandList/BandList';
import Heading from './components/Heading';
import data from './metal.json';
import Search from './components/Search';
import MetalMeta from './components/MetalMeta';

function App() {
  const [bands, setBands] = useState(data);

  return (
    <div className="bg-[#282c34] min-w-screen min-h-screen">
      <header className="flex  pt-3 flex-col items-center">
        <section>
          <Heading />
          <MetalMeta />
          <Search setBands={setBands} />
        </section>
      </header>
      <main className="w-full h-full py-8 px-20">
        <BandList bands={bands} />
      </main>
    </div>
  );
}

export default App;

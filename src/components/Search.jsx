import React, { useState, useEffect } from 'react';
import data from '../metal.json';

function Search({ setBands }) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!search) {
      setBands(data);
      return;
    }

    const filteredBands = data.filter((band) => {
      return band.band_name.toLowerCase().includes(search.toLowerCase());
    });

    setBands(filteredBands);
  }, [search]);

  return (
    <div className="mt-3 rounded-full px-4 py-2 flex bg-white items-center">
      <div className="h-4 w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=""
          fill="rgb(115, 115, 115)"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search bands.."
        className="placeholder:text-neutral-500 outline-none pl-2 w-full h-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;

import React from 'react';
import data from '../metal.json';

function MetalMeta() {
  const numberOfBands = data.length;
  const numberOfFans = data.reduce((acc, band) => {
    return acc + band.fans;
  }, 0);

  return (
    <div className="text-white text-left">
      <p>
        <strong>Bands:</strong> {numberOfBands}
      </p>
      <p>
        <strong>Total fans:</strong> {(numberOfFans * 1000).toLocaleString('en-US')}
      </p>
    </div>
  );
}

export default MetalMeta;

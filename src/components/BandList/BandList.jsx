import React from 'react';
import BandInfoCard from '../BandInfoCard/BandInfoCard';

function BandList({ bands }) {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-3">
      {bands.map((band, i) => {
        return <BandInfoCard key={i} band={band} />;
      })}
    </section>
  );
}

export default BandList;

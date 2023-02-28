import React from 'react';
import LikeCounter from '../LikeCounter';

function BandInfoCard({ band }) {
  const { band_name, fans, formed, origin, split, style } = band;

  return (
    <article className="bg-neutral-800 text-white w-full border border-neutral-400 py-7 px-5 max-w-[500px] flex flex-col gap-y-4">
      <h2 className="text-3xl font-bold">{band_name}</h2>
      <p>
        <strong>Orgin: </strong> <span>{origin}</span> <strong>Fans: </strong>{' '}
        <span>{(fans * 1000).toLocaleString('en-US')}</span> <strong>Formed: </strong>{' '}
        <span>{formed}</span> <strong>Split: </strong> <span>{split}</span>{' '}
      </p>
      <ul className="list-disc">
        <p>Styles:</p>
        {style.split(',').map((genre) => (
          <li key={genre} className="ml-6">
            <p>{genre}</p>
          </li>
        ))}
      </ul>
      {split.length == 1 && <LikeCounter />}
    </article>
  );
}

export default BandInfoCard;

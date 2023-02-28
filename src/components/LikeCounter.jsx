import React, { useState } from 'react';

function LikeCounter() {
  const [likes, setLikes] = useState(0);

  return (
    <div className="flex gap-x-3 items-center ">
      <div
        className=" bg-stone-600 rounded-md px-2 py-1 cursor-pointer hover:scale-[1.1]"
        onClick={() =>
          setLikes((prev) => {
            if (prev > 0) {
              return prev - 1;
            }
            return prev;
          })
        }
      >
        <p>👎</p>
      </div>
      <p>{likes}</p>
      <div
        onClick={() => setLikes((prev) => prev + 1)}
        className="bg-stone-600 rounded-md px-2 py-1 cursor-pointer hover:scale-[1.1]"
      >
        <p>👍</p>
      </div>
    </div>
  );
}

export default LikeCounter;

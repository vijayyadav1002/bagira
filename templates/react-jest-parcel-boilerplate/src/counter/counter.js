import React, { useState } from 'react';

import './counter.scss';

const Counter = () => {
  const [count, setCount] = useState(0);
  setTimeout(() => setCount(count + (count || 1)), 5);

  return (
    <div className='counter'>
      <h1>I will achieve INFINITY</h1>
      <div className='count'>{count}</div>
    </div>
  );
}

export { Counter };
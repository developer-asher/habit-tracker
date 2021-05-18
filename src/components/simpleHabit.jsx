import React, { useCallback, useRef, useState } from 'react';

const SimpleHabit = () => {
  const [count, setCount] = useState(0);
  const spanRef = useRef(null);

  const handleIncrement = useCallback(() => {
    setCount((count) => count + 1);
    console.log(spanRef);
  });

  return (
    <li className='habit'>
      <span className='habit__name' ref={spanRef}>
        Reading
      </span>
      <span className='habit__count'>{count}</span>
      <button
        className='habit__button habit__increase'
        onClick={handleIncrement}
      >
        <i className='fas fa-plus-square'></i>
      </button>
    </li>
  );
};

export default SimpleHabit;

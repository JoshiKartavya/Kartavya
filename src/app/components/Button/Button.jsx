// components/Button.js

import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='text-xs sm:text-sm px-4 py-2 sm:px-6 sm:py-4 lg:text-2xl xl:text-2xl font-normal font-nato capitalize bg-[--contrast] rounded-[300px] cursor-pointer'
    >
      {text}
    </button>
  );
};

export default Button;

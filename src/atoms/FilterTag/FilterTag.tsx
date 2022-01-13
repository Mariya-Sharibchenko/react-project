import React from 'react';

export interface IFilterTagProps {
  text: string,
  onClick: () => void,
}

export const FilterTag: React.FC<IFilterTagProps> = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
};

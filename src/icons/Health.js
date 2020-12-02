import React from 'react';
import CategoryContext from '../contexts/CategoryContext';

function Health() {
  const { name } = React.useContext(CategoryContext);

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={`category__stroke ${name === 'health' && 'category__stroke_active'}`} d="M22 12H18L15 21L9 3L6 12H2" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
}

export default Health;

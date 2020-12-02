import React from 'react';
import CategoryContext from '../contexts/CategoryContext';

function Catalog() {
  const { name } = React.useContext(CategoryContext);

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={`category__stroke ${name === 'catalog' && 'category__stroke_active'}`} d="M10 3H3V10H10V3Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path className={`category__stroke ${name === 'catalog' && 'category__stroke_active'}`} d="M21 3H14V10H21V3Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path className={`category__stroke ${name === 'catalog' && 'category__stroke_active'}`} d="M21 14H14V21H21V14Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path className={`category__stroke ${name === 'catalog' && 'category__stroke_active'}`} d="M10 14H3V21H10V14Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
}

export default Catalog;

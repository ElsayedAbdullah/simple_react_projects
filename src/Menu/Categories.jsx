import React from 'react';
import { BtnContainer, FilterBtn } from './Menu.styles';

const Categories = ({ filterItems, categories }) => {
  return (
    <>
      <BtnContainer>
        {categories.map((category, index) => (
          <FilterBtn key={index} type='button' onClick={() => filterItems(category)}>
            {category}
          </FilterBtn>
        ))}
      </BtnContainer>
    </>
  );
};

export default Categories;

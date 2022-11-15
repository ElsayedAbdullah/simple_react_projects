import React, { useState } from 'react';
import Categories from './Categories';
import items from './data';
import Menu from './Menu';
import { GlobalStyle, MenuTag, TitleTag, UnderlineTag } from './Menu.styles';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const MenuApp = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    } else {
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
      return;
    }
  };
  return (
    <div className='main'>
      <GlobalStyle />
      <MenuTag className='section'>
        <TitleTag className='title'>
          <h2>Our Menu</h2>
          <UnderlineTag className='underline' />
        </TitleTag>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu menuItems={menuItems} />
      </MenuTag>
    </div>
  );
};

export default MenuApp;

import React from 'react';
import { ItemInfoHeader, ItemInfoHeaderTitle, ItemText, MenuItem, Photo, Price, SectionCenter } from './Menu.styles';

const Menu = ({ menuItems, filterItems }) => {
  return (
    <SectionCenter>
      {menuItems.map((menuItem) => {
        const { id, title, desc, price, img } = menuItem;
        return (
          <MenuItem key={id}>
            <Photo src={img} alt={title} />
            <div className='item-info'>
              <ItemInfoHeader>
                <ItemInfoHeaderTitle>{title}</ItemInfoHeaderTitle>
                <Price>${price}</Price>
              </ItemInfoHeader>
              <ItemText>{desc}</ItemText>
            </div>
          </MenuItem>
        );
      })}
    </SectionCenter>
  );
};

export default Menu;

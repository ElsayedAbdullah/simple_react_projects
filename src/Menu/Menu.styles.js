/*
=============== 
Variables
===============
*/

import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    /* dark shades of primary color*/
    --clr-primary-1: hsl(205, 86%, 17%);
    --clr-primary-2: hsl(205, 77%, 27%);
    --clr-primary-3: hsl(205, 72%, 37%);
    --clr-primary-4: hsl(205, 63%, 48%);
    /* primary/main color */
    --clr-primary-5: hsl(205, 78%, 60%);
    /* lighter shades of primary color */
    --clr-primary-6: hsl(205, 89%, 70%);
    --clr-primary-7: hsl(205, 90%, 76%);
    --clr-primary-8: hsl(205, 86%, 81%);
    --clr-primary-9: hsl(205, 90%, 88%);
    --clr-primary-10: hsl(205, 100%, 96%);
    /* darkest grey - used for headings */
    --clr-grey-1: hsl(209, 61%, 16%);
    --clr-grey-2: hsl(211, 39%, 23%);
    --clr-grey-3: hsl(209, 34%, 30%);
    --clr-grey-4: hsl(209, 28%, 39%);
    /* grey used for paragraphs */
    --clr-grey-5: hsl(210, 22%, 49%);
    --clr-grey-6: hsl(209, 23%, 60%);
    --clr-grey-7: hsl(211, 27%, 70%);
    --clr-grey-8: hsl(210, 31%, 80%);
    --clr-grey-9: hsl(212, 33%, 89%);
    --clr-grey-10: hsl(210, 36%, 96%);
    --clr-white: #fff;
    --clr-gold: #c59d5f;
  
    --clr-red-dark: hsl(360, 67%, 44%);
    --clr-red-light: hsl(360, 71%, 66%);
    --clr-green-dark: hsl(125, 67%, 44%);
    --clr-green-light: hsl(125, 71%, 66%);
    --clr-black: #222;
    --transition: all 0.3s linear;
    --spacing: 0.1rem;
    --radius: 0.25rem;
    --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    --max-width: 1170px;
    --fixed-width: 920px;
  }
`;

/*
=============== 
Menu
===============
*/

export const MenuTag = styled.div`
  padding: 5rem 0;
`;

export const TitleTag = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const UnderlineTag = styled.div`
  margin-bottom: 2rem;
  width: 5rem;
  height: 0.25rem;
  background: var(--clr-gold);
  margin-left: auto;
  margin-right: auto;
`;

export const BtnContainer = styled.div`
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
`;

export const FilterBtn = styled.button`
  background: transparent;
  border-color: transparent;
  font-size: 1rem;
  text-transform: capitalize;
  margin: 0 0.5rem;
  letter-spacing: 1px;
  padding: 0.375rem 0.75rem;
  color: var(--clr-gold);
  cursor: pointer;
  transition: var(--transition);
  border-radius: var(--radius);
  &:hover {
    background: var(--clr-gold);
    color: var(--clr-white);
  }
`;

export const SectionCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  display: grid;
  gap: 3rem 2rem;
  justify-items: center;
  @media screen and (min-width: 1200px) {
    width: 95vw;
    grid-template-columns: 1fr 1fr;
  }
`;

export const MenuItem = styled.article`
  display: grid;
  gap: 1rem 2rem;
  max-width: 25rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: 225px 1fr;
    gap: 0 1.25rem;
    max-width: 40rem;
  }
`;

export const Photo = styled.img`
  object-fit: cover;
  height: 200px;
  width: 100%;
  border: 0.25rem solid var(--clr-gold);
  border-radius: var(--radius);
  display: block;
  @media screen and (min-width: 768px) {
    height: 175px;
  }
  @media screen and (min-width: 1200px) {
    height: 150px;
  }
`;

export const ItemInfoHeader = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px dotted var(--clr-grey-5);
`;

export const ItemInfoHeaderTitle = styled.h4`
  margin-bottom: 0.5rem;
`;

export const Price = styled.h4`
  color: var(--clr-gold);
`;

export const ItemText = styled.p`
  margin-bottom: 0;
  padding-top: 1rem;
`;

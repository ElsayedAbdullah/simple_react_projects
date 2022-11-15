import React from 'react';
import Accordion from './Accordion/Accordion';
import MenuApp from './Menu/MenuApp';
import Reviews from './Reviews/Reviews';
import ToursApp from './Tours/ToursApp';
function App() {
  return (
    <>
      <ToursApp />
      <Reviews />
      <Accordion />
      <MenuApp />
    </>
  );
}

export default App;

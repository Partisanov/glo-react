import React from 'react';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { Menu } from './Components/Menu/Menu';
import { NavBar } from './Components/NavBar/NavBar';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItems';
import { useOrders } from './Components/Hooks/useOrders';



function App() {

  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle/>
      <NavBar />
      <Order {...orders} {...openItem}/>
      <Menu {...openItem}/>
      { openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;

import React from 'react';
import { GlobalStyle } from './Components/GlobalStyle';
import { Menu } from './Components/Menu';
import { NavBar } from './Components/NavBar';
import { ModalItem } from './Components/ModalItem';
import { Order } from './Components/Order';
import { useOpenItem } from './Components/Hooks/useOpenItems';
import { useOrders } from './Components/Hooks/useOrders';



function App() {

  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle/>
      <NavBar />
      <Order {...orders} />
      <Menu {...openItem}/>
      { openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;

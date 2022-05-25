import React, { useState } from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import { NavBar } from "./components/NavBar";
import { Menu } from "./components/Menu";
import { ModalItem } from "./components/ModalItem";
import { Order } from "./components/Order";

function App() {
  const [openItem, setOpenItem] = useState(null);
  // console.log("item: ", openItem);
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Order />
      <Menu setOpenItem={setOpenItem} />
      <ModalItem openItem={openItem} setOpenItem={setOpenItem} />
    </>
  );
}

export default App;

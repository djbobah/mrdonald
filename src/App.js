import React, { useState } from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import { NavBar } from "./components/NavBar";
import { Menu } from "./components/Menu";

function App() {
  const [openItem, setOpenItem] = useState("");
  console.log("item: ", openItem);
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Menu setOpenItem={setOpenItem} />
    </>
  );
}

export default App;

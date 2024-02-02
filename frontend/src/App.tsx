import React from "react";
import NavBar from "./components/NavBar/NavBar";
import SideMenu from "./components/SideBar/SideMenu";
import CataloguePage from "./views/Catalogue/CataloguePage";

function App() {
  return (
    <div className="container">
      <NavBar />
      <SideMenu />
      {/* <CataloguePage /> */}
    </div>
  );
}

export default App;

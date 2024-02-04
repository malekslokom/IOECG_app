import React from "react";
import NavBar from "./components/NavBar/NavBar";
import SideMenu from "./components/SideBar/SideMenu";
import AcceuilPage from "./views/Acceuil/AcceuilPage";
import ListProjetsPage from "./views/ListProjets/ListProjetsPage";

function App() {
  return (
    <div className="container">
      <NavBar />
      <SideMenu />
      {/*<ListProjetsPage />*/}
      {/*<AcceuilPage/>*/}
      {/*<CataloguePage/>*/}
      {/*<ListProjetsPage/>*/}
    </div>
  );
}

export default App;

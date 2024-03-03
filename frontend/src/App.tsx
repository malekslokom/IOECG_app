import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Optional: Import Bootstrap JS bundle
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import AcceuilPage from "./views/Acceuil/AcceuilPage";
import ProjetList from "./views/Projets/ListProjets/ProjetList";
import CatalogueProjetPage from "./views/Projets/Catalogues/CatalogueProjetPage";
import DatasetProjetPage from "./views/Projets/Datasets/DatasetProjetPage";
import AnalyseProjetPage from "./views/Projets/Analyses/AnalyseProjetPage";
import RapportProjetPage from "./views/Projets/Rapports/RapportProjetPage";
import MesCataloguePage from "./views/Catalogues/MesCataloguePage";
import HistoriquePage from "./views/Historique/HistoriquePage";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
function App() {
  const [isDark, setIsDark] = useState(() => {
    const themePreference = localStorage.getItem("themePreference");
    return themePreference
      ? JSON.parse(themePreference)
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    localStorage.setItem("themePreference", JSON.stringify(isDark));
  }, [isDark]);

  const handleThemeChange = (isChecked: boolean) => {
    setIsDark(isChecked);
  };
  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <BrowserRouter>
        <NavBar theme={isDark} onThemeChange={handleThemeChange} />
        <SideBar />
        <Routes>
          <Route path="/" element={<AcceuilPage />} />
          <Route path="/projets" element={<ProjetList />} />
          <Route path="/projets/catalogues" element={<CatalogueProjetPage />} />
          <Route path="/projets/datasets" element={<DatasetProjetPage />} />
          <Route path="/projets/analyses" element={<AnalyseProjetPage />} />
          <Route path="/projets/rapports" element={<RapportProjetPage />} />
          <Route path="/mes-catalogues" element={<MesCataloguePage />} />
          <Route path="/mes-datasets" element={<MesCataloguePage />} />
          <Route path="/historique" element={<HistoriquePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import SideMenu from "./components/SideBar/SideMenu";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import HistoriquePage from "./views/Historique/HistoriquePage";
import ListProjets from "./components/ListProjets/ListProjets";
import CataloguesPage from "./views/Catalogue/CataloguePage";
import DatasetsPage from "./views/Datasets/DatasetsPage";
import AnalysesPage from "./views/Analyses/AnalysePage";
import RapportPage from "./views/Rapport/RapportPage";
const { Content } = Layout;
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
    <BrowserRouter>
      <Layout className="App" data-theme={isDark ? "dark" : "light"}>
        <NavBar theme={isDark} onThemeChange={handleThemeChange} />
        <Layout>
          <SideMenu theme={isDark} />
          <Content style={{ marginLeft: 10 }}>
            <Routes>
              {/* <Route path="/" element={<ListProjets />} /> */}
              <Route path="/projets/catalogues" element={<CataloguesPage />} />
              <Route path="/projets/datasets" element={<DatasetsPage />} />
              <Route path="/projets/analyses" element={<AnalysesPage />} />
              <Route path="/projets/rapports" element={<RapportPage />} />
              <Route path="/mes-catalogues" element={<CataloguesPage />} />
              <Route path="/mes-datasets" element={<DatasetsPage />} />
              <Route path="/historique" element={<HistoriquePage />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

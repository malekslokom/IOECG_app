
import { Navigate, useRoutes } from "react-router-dom";
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import RepportPage from "../views/Projet/RapportPage"
import ProjetPage from "../views/Projet/ProjetPage"
import CataloguesPage from "../views/Projet/CataloguesPage"
import DatasetsPage from "../views/Projet/DatasetsPage"
export default function Router() {
return useRoutes([
  {
    path: "/projets",
    element: <ProjetPage />,
    state: "Projets",
    sidebarProps: {
      displayText: "Projets",
      icon: <AppsOutlinedIcon />
    },
    children: [
      {
        path: "catalogues",
        element: <CataloguesPage />,
        state: "projets.catalogues",
        sidebarProps: {
          displayText: "Catalogues"
        },
      },
      {
        path: "datasets",
        element: <DatasetsPage />,
        state: "projets.datasets",
        sidebarProps: {
          displayText: "Datasets"
        }
      },
      {
        path: "analyses",
        element: <AnalysesPage />,
        state: "projets.analyses",
        sidebarProps: {
          displayText: "Analyses"
        }
      },
      {
        path: "rapports",
        element: <RepportPage />,
        state: "projets.rapports",
        sidebarProps: {
          displayText: "Rapports"
        }
      }
    ]
  },


]);
}
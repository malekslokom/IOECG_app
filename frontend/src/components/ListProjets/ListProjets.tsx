import React from 'react'

import "./ListProjets.css";
import {
    ProjectOutlined,
    HistoryOutlined,
    DatabaseOutlined,
  } from "@ant-design/icons";
import Menu from 'antd/es/menu';
import oeil from "../../assets/oeil.png";
import delete1 from "../../assets/delete.png";

interface ListProjetsProps {
    projects : any[] ; // liste des projets
  }

const ListProjets = ({ projects}:ListProjetsProps) => {
    
      return (
        <div className="App">
          <div className="filters">
            {/* Filtres et recherche ici */}
          </div>
          <table >
            <thead>
              <tr>
                <th>Nom</th>
                <th>Date création</th>
                <th>Auteur</th>
                <th>Version</th>
                <th>Type</th>
                <th></th>
                <th></th>
              </tr>
              </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={index}>
                  <td>{project.name}</td>
                  <td>{project.creationDate}</td>
                  <td>{project.author}</td>
                  <td>{project.version}</td>
                  <td>{project.type}</td>
                  <td><a href="#"><img src={delete1}/></a></td>
                  <td><a href="#"><img src={oeil}/></a></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            {/* Pagination ici */}
          </div>
        </div>
      );

      
    
}

export default ListProjets
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
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-6">
              <h2>Projets</h2>
            </div>
            <div className="col-6 text-right">
              <button className="btn btn-gray" style={{ backgroundColor: '#aaaaaa30', color: 'black'}}>Créer</button>
            </div>
          </div>
        </div>
  
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="filters">
                {/* Filtres et recherche ici */}
                <hr/>
              </div>
              <br/><br/>

              
             
              <table className="table table-striped table-bordered table-hover ">
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
                      <td><button className="btn btn-danger btn-sm"><img src={delete1} alt="Delete" /></button></td>
                      <td><button className="btn btn-info btn-sm"><img src={oeil} alt="View" /></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="pagination">
                {/* Pagination ici */}
              </div>
            </div>
          </div>
        </div>
      </div>
        
      );

      
    
}

export default ListProjets
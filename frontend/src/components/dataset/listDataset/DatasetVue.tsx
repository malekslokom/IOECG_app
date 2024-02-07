import React, { useState } from "react";
import { Menu } from "antd";
import "./DatasetVue.css";
import {
  ReloadOutlined,
  CalendarOutlined,
  RedoOutlined,
    DatabaseOutlined,
    SearchOutlined,
    FilterOutlined,
    EyeOutlined,
    DeleteOutlined,
  } from "@ant-design/icons";
  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEye, faSync } from '@fortawesome/free-solid-svg-icons';
import { Button, DatePicker, Input, Select, Pagination } from "antd";
import ImportDataset from "../importDataset/ImportDataset";

interface DatasetVueProps {
 
  onOpen: () => void; 
}

const DatasetVue: React.FC<DatasetVueProps> = ({ onOpen }) => {
 
  // Donnée statique
  const [datasets, setDatasets] = useState([
    { date: "date", nom: "nom", auteur: "auteur", description: " description", dimension: "dimension" },
    { date: "date2", nom: "nom2", auteur: "auteur2", description: " description2", dimension: "dimension2" },
    { date: "date3", nom: "nom3", auteur: "auteur3", description: " description3", dimension: "dimension3" }
  ]);
  const [nomProjet, setNomProjet] = useState("Projet_X");
// config page grisée 
const [isImportModalVisible, setIsImportModalVisible] = useState(false); 
  // head du tableau
  const tete = (
    <thead>
      <tr>
        <th>Date Création</th>
        <th>Nom</th>
        <th>Auteur</th>
        <th>Description</th>
        <th>Dimension</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
  );

  function handleDelete(index: number) {
    const newDatasets = [...datasets];
    newDatasets.splice(index, 1);
    setDatasets(newDatasets);
    // Ajoutez ici la logique de demande d'autorisation si nécessaire
  }

  const handleVue = () => {
    // Logique de visualisation ici
  };

  const handleImport = () => {
    setIsImportModalVisible(true);
  };
  const closeModal = () => {
    setIsImportModalVisible(false); // Fermer le modal d'importation
  };
  return (
    <div className="page">
       
      <div className="container-fluid">
        
          <div className="col-6">
            <h2>Datasets</h2>
           {/* <p>{nomProjet}</p>{/*arendre dynamique */}
            <button className="importButton" onClick={onOpen}>
        Importer
      </button>
      {/*component filtre et regler le pb des lignes */}
          </div>
          <div className="filters">
              <Menu mode="horizontal" theme="light" >
                <Menu.Item key="refresh"  style={{marginTop: '-14px'}} >
                  <FontAwesomeIcon icon={faSync} style={{ fontSize: '1.5em', color:'rgba(59,153,255,255)'  }} />

                </Menu.Item>

                <Menu.Item key="calendar1" /*icon={<CalendarOutlined />}*/  style={{ width: 200, fontSize: '2em',marginTop: '-18px'  }}>
                  <DatePicker /*onChange={handleDateChange}*/ />
                </Menu.Item>

                <Menu.Item key="calendar2" /*icon={<CalendarOutlined />}*/ style={{ width: 200, fontSize: '2em' ,marginTop: '-18px' }}>
                  <DatePicker /*onChange={handleDateChange}*/ />
                </Menu.Item>

                <Menu.Item key="type" style={{marginTop: '-14px'}}>
                <Select defaultValue="Type" style={{ width: 180, fontSize: '3em' }} /*onChange={handleTypeChange}*/>
                  <option value="type1">Type 1</option>
                  <option value="type2">Type 2</option>
                </Select>
              </Menu.Item>

              <Menu.Item key="version" style={{marginTop: '-14px'}}>
                <Select defaultValue="Version" style={{ width: 180, fontSize: '2em' }} /*onChange={handleVersionChange}*/>
                  <option value="v1">v1</option>
                  <option value="v2">v2</option>
                </Select>
              </Menu.Item>

                <Menu.Item key="filter" style={{ width: 150, fontSize: '2em' ,marginTop: '-20px',marginLeft: '20px'}}>
                <Button icon={<FilterOutlined />} /*onClick={handleFilterClick}*/>
                  Filtre
                </Button>
                </Menu.Item>

                <Menu.Item key="search" style={{ width: 250, fontSize: '2em',marginTop: '-20px' }}>
                <Input
                    placeholder="chercher ...."
                    prefix={<SearchOutlined />}
                    className="search-bar"
                  
                    /*onPressEnter={e => handleSearch(e.target.value)}*/
                  />
                 
                </Menu.Item>
                <br/>
              </Menu>
                
              </div>
          <hr/>
      
      </div>
    <br/>
      <table className="table">
        {tete}
        <tbody>
          {datasets.map((data, index) => (
            <tr key={index}>
              <td>{data.date}</td>
              <td>{data.nom}</td>
              <td>{data.auteur}</td>
              <td>{data.description}</td>
              <td>{data.dimension}</td>
              <td>
              <DeleteOutlined onClick={() =>  handleDelete(index)} style={{ fontSize: '25px' }} />
              </td>
              <td>
              <EyeOutlined onClick={() => handleVue} style={{ fontSize: '25px' }} />
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DatasetVue;
//il manque le bas pour aller à la page suivante (numerotation de page )
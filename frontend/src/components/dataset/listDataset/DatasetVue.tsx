import React, { useState } from "react";
import { Menu } from "antd";
import "./DatasetVue.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeadList from "../../HeadList/HeadList";
  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEye, faSync } from '@fortawesome/free-solid-svg-icons';
import ImportDataset from "../importDataset/ImportDataset";

interface DatasetVueProps {
  onOpen: () => void; 
  nomButton: string;
  Type: string;
}

const DatasetVue: React.FC<DatasetVueProps> = ({ onOpen, nomButton, Type }) => {
 
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
        <th scope="col text-left">Date Création</th>
        <th scope="col text-left">Nom</th>
        <th scope="col text-left">Auteur</th>
        <th scope="col text-left"> Description</th>
        {Type === "Datasets" && (<th scope="col text-left">Dimension</th> )}
        <th scope="col text-left"></th>
        <th scope="col text-left"></th>
      </tr>
    </thead>
  );
 var nomBoutton= nomButton
 var type =Type
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
    setIsImportModalVisible(false); 
  };
   return (

    <div className="page">
      <h2>{type}</h2> 
      <div className="container-fluid">
          <div className="col-6">

      {nomBoutton !== null && (
       <button className="importButton" onClick={onOpen}>
       {nomBoutton}
    </button>
      )}

          </div>  
      </div>
    <br/>
    <hr/>
    <br/><br/>
    
    <div className="filters head-list"> 
       <HeadList></HeadList>
    </div>
    <br/> <br/>

      <table className="table ">
        {tete}
        <tbody>
          {datasets.map((data, index) => (
            <tr key={index}>
              <td className="text-left">{data.date}</td>
              <td className="text-left">{data.nom}</td>
              <td className="text-left">{data.auteur}</td>
              <td className="text-left">{data.description}</td>
              {Type === "Datasets" && ( <td className="text-left">{data.dimension}</td> )}
              <td>
              <FontAwesomeIcon icon={faTrash}  onClick={() => handleDelete(index)}style={{ fontSize: '20px' }} />
       
              </td>
              <td>
                
              <FontAwesomeIcon icon={faEye}onClick={() => handleDelete(index)}style={{ fontSize: '20px' }} />
       
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
import React from "react";
import { useState } from "react";
import "./ImportDataset.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from "react-bootstrap";




interface ImportDatasetProps {
  
  onClose: () => void;
}

const ImportDataset: React.FC<ImportDatasetProps> = ({onClose }) => {
  
    

    // liste statique 
    const[dataImport, setDataImport]= useState([{date:"date_import", nom:"nom_import",auteur: "auteur_import", description: " description_import",dimension : "dimension_import"},
                                    {date:"date2_import", nom:"nom2_import",auteur: "auteur2_import", description: " description2_import",dimension : "dimension2_import"},
                                    {date:"date3_import", nom:"nom3_import",auteur: "auteur3_import", description: " description3_import",dimension : "dimension3_import"},{date:"date_import", nom:"nom_import",auteur: "auteur_import", description: " description_import",dimension : "dimension_import"},
                                    {date:"date2_import", nom:"nom2_import",auteur: "auteur2_import", description: " description2_import",dimension : "dimension2_import"},
                                    {date:"date3_import", nom:"nom3_import",auteur: "auteur3_import", description: " description3_import",dimension : "dimension3_import"},{date:"date_import", nom:"nom_import",auteur: "auteur_import", description: " description_import",dimension : "dimension_import"},
                                    {date:"date2_import", nom:"nom2_import",auteur: "auteur2_import", description: " description2_import",dimension : "dimension2_import"},
                                    {date:"date3_import", nom:"nom3_import",auteur: "auteur3_import", description: " description3_import",dimension : "dimension3_import"},{date:"date_import", nom:"nom_import",auteur: "auteur_import", description: " description_import",dimension : "dimension_import"},
                                    {date:"date2_import", nom:"nom2_import",auteur: "auteur2_import", description: " description2_import",dimension : "dimension2_import"},
                                    {date:"date3_import", nom:"nom3_import",auteur: "auteur3_import", description: " description3_import",dimension : "dimension3_import"},
                                    {date:"date3_import", nom:"nom3_import",auteur: "auteur3_import", description: " description3_import",dimension : "dimension3_import"},{date:"date_import", nom:"nom_import",auteur: "auteur_import", description: " description_import",dimension : "dimension_import"},
                                    {date:"date2_import", nom:"nom2_import",auteur: "auteur2_import", description: " description2_import",dimension : "dimension2_import"},
                                    {date:"date3_import", nom:"nom3_import",auteur: "auteur3_import", description: " description3_import",dimension : "dimension3_import"}])
    // head du tableau 
    const  tete = <thead>
    <tr>
      <th>Nom</th>
      <th>Date Création</th>
      <th>Auteur</th>
      <th></th>
    </tr>
  </thead>

  //les fonction pour visualiser et supprimer 

 
  const handleadd = (index:number)=>{}
  const handleShearch=()=>{}
  const handleOk = ()=>{}
  /// affichage de la liste
  return (
    <Modal
      show={true}
      onHide={onClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
     
      
   
        
      
      <div className="page1">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
          Importer Datasets    
        </Modal.Title>
        <div className="search-container">
  <input type="text" placeholder="Rechercher ...." className="search-input" />
  <FontAwesomeIcon icon={faSearch} className="search-icon" onClick={() => handleShearch()} />

</div>
        <div className="custom-filter">
          <Button variant="light">
            <FontAwesomeIcon icon={faFilter} />
            Filter
          </Button>
        </div>
        <br/> <br/>
      </Modal.Header>
        <hr className="trait" />
        <div className="tab-container">
          <table className="table table-striped table-hover ">
            {tete}
            <tbody>
              
              {dataImport.map((data, index) => (
                <tr key={index}>
                  <td> {data.nom}</td>
                  <td> {data.date}</td>
                  <td> {data.auteur}</td>
                  <td>
                    <FontAwesomeIcon icon={faPlusCircle} onClick={() => handleadd(index)} style={{ fontSize: '25px' }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="ok-button-container">
          <button className="okButton" onClick={onClose}>
            Ok
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ImportDataset;
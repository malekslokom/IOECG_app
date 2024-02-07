import React from "react";
import { useState } from "react";
import "./ImportDataset.css";
import { PlusCircleOutlined,SearchOutlined,FilterOutlined } from "@ant-design/icons";
import { Modal,Input,Button } from "antd";



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
  const handleOk = ()=>{}
  /// affichage de la liste
  return <Modal
  visible={true}
  onCancel={onClose}
  footer={null}
  width={900} // Largeur spécifiée
  style={{ width: '900px', height: '600px' }} 
>
 
  <div className="page1">
      
          <div className="col-6">
            <h2>Importer Datasets</h2>
           {/* <p>{nomProjet}</p>{/*arendre dynamique */}
          
                <Input
                    placeholder="chercher ...."
                    prefix={<SearchOutlined />}
                    className="custom-search"
                    /*onPressEnter={e => handleSearch(e.target.value)}*/
                  />
                 <Button icon={<FilterOutlined />}   className="custom-filter"/*onClick={OnOpen}*/>
                  Filter
                </Button>
     
      {/* filtre et barre de recherche */}
          
         <br/><br/>
         </div>
         <hr className="trait"/>
         <br/><br/><br/>
      
     <div className="tab-container"><table className="tab tab-striped  tab-hover ">
  {tete}
    <tbody> 
        {dataImport.map((data, index) => (
        <tr key={index} >
              <td> {data.nom}</td>
              <td> {data.date}</td>
              <td> {data.auteur}</td>
              <td>   
        <PlusCircleOutlined onClick={() =>  handleadd(index)} style={{ fontSize: '25px' }} />
              </td>
            </tr>//icone pour add 
        )

        )}
    </tbody>
  </table></div>
  
  <div className="ok-button-container">
        <button className="okButton" onClick={onClose}>
          Ok
        </button>
        </div>
  </div>
  </Modal>
}
export default ImportDataset;
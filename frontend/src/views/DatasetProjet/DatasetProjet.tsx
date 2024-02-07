import React, { useState } from "react";
import ImportDataset from "../../components/dataset/importDataset/ImportDataset";
import DatasetVue from "../../components/dataset/listDataset/DatasetVue";
import "./DatasetProjet.css";

const DatasetProjet: React.FC = () => {
  const [isImportModalVisible, setIsImportModalVisible] = useState(false);

  const handleImportClick = () => {
    setIsImportModalVisible(true);
  };

  const closeModal = () => {
    setIsImportModalVisible(false);
  };

  return (
    <div className="catalog-page">
      <div className="model-list-container">
        <DatasetVue onOpen={handleImportClick} />
      </div>
      
      {isImportModalVisible && <ImportDataset onClose={closeModal} />}
    </div>
  );
};

export default DatasetProjet;

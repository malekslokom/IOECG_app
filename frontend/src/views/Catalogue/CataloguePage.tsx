// pages/CatalogPage.tsx
import React, { useEffect, useState } from 'react';
import { fetchModels } from '../../services/ApiService';
import ModelCard from '../../components/Card/ModelCard';
import ModelModal from '../../components/Modals/ModelModal';

const CataloguesPage: React.FC = () => {
  const [models, setModels] = useState<Model[]>([]);
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);

  useEffect(() => {
    fetchModels()
      .then(data => setModels(data))
      .catch(error => console.error('Error fetching models:', error));
  }, []);

  const handleCardClick = (model: Model) => {
    setSelectedModel(model);
  };

  const closeModal = () => {
    setSelectedModel(null);
  };

  return (
    
    <div className="catalog-page">
      <h2>Catalogue des modéles</h2>
      <hr />
      
      <div className="model-list-container">
        {models.map(model => (
          <ModelCard key={model.name} model={model} onClick={() => handleCardClick(model)} />
        ))}
      </div>

      {selectedModel && <ModelModal model={selectedModel} onClose={closeModal} />}
    </div>
  );
};

export default CataloguesPage;

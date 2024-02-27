// pages/CatalogPage.tsx
import React, { useEffect, useState } from 'react';
import { fetchModels } from '../../services/ApiService';
import ModelCard from '../../components/Card/ModelCard';
import ModelModal from '../../components/Modals/ModelModal';
import './CataloguePage.css'

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
    <div className='catalog-page'>
        <div className="content-head">
            <h2>Catalogue des modéles</h2>
        </div>
        <hr />
        <div className="model-list-container">
          <div className="row row-cols-1 row-cols-md-3">
          {models.map(model => (
            <div key={model.name} className="col mb-4">
              <ModelCard model={model} onClick={() => handleCardClick(model)} />
            </div>
          ))}
        </div>
        </div>

        

        {selectedModel && <ModelModal model={selectedModel} onClose={closeModal} />}
    </div>
  );
};

export default CataloguesPage;

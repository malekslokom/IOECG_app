// pages/CatalogPage.tsx
import React, { useEffect, useState } from 'react';
import { fetchModels } from '../../services/ApiService';
import ModelCard from '../../components/Card/ModelCard';

const CataloguesPage: React.FC = () => {
  const [models, setModels] = useState<Model[]>([]);

  useEffect(() => {
    fetchModels()
      .then(data => {setModels(data); console.log(data);})
      .catch(error => console.error('Error fetching models:', error));
  }, []);

  return (
    <div className="catalog-page ">
      <h2>Catalogue des modéles</h2>
      <hr />
      
      <div className="model-list-container">
        {models.map(model => (
          <ModelCard key={model.name} model={model} />
        ))}
      </div>
    </div>
  );
};

export default CataloguesPage;

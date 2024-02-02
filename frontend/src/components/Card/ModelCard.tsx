import React from 'react'
import "./ModelCard.css";

interface ModelCardProps {
  model: Model;
}

const ModelCard: React.FC<ModelCardProps> = ({ model }) => {
  return (
    <div className="card-container">
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{model.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{model.author}</h6>
          <p className="card-text">{model.description}</p>
          <hr/>
          <span className="tag">{model.taskNature}</span>
        </div>
      </div>
    </div>
  );
}

export default ModelCard;
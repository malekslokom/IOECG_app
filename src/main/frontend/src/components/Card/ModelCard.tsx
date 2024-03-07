import React from 'react';

interface ModelCardProps {
  model: Model;
  onClick: () => void; 
}

const ModelCard: React.FC<ModelCardProps> = ({ model, onClick }) => {
  return (
      // <div className="card card-container " onClick={onClick}> 
      //   <div className="card-body">
      //     <h5 className="card-title">{model.name}</h5>
      //     <hr/>
      //     <h6 className="card-subtitle mb-2 text-muted">{model.author}</h6>
      //     <p className="card-text" style={{ height: '70px', overflow: 'hidden' }}>{model.description}</p>
      //     <span className="badge bg-secondary">{model.taskNature}</span>
      //   </div>
      // </div>
      
          // <div className="card" onClick={onClick}>
          //   <div className="card-block">
          //     <h4 className="card-title">{model.name}</h4>
          //     <h6 className="card-subtitle text-muted">{model.author}</h6>
          //     <p className="card-text p-y-1">{model.description}</p>
          //     <span className="badge bg-secondary p-2">{model.taskNature}</span>
          //   </div>
          // </div>

<div className="card" onClick={onClick}>
<div className="card-body">
  <h5 className="card-title">{model.name}</h5>
  <h6 className="card-subtitle mb-2 text-muted">{model.author}</h6>
  <p className="card-text">{model.description}</p>
  <span className="badge bg-secondary p-2">{model.taskNature}</span>
</div>
</div>
  );
}

export default ModelCard;
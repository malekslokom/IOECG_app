import React from 'react';
import './ModelModal.css';

interface ModelModalProps {
  model: Model;
  onClose: () => void;
  
}

const ModelModal: React.FC<ModelModalProps> = ({ model, onClose }) => {
  return (
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
    <div className="modal-content">
        <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">{model.name}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        <p>{model.description}</p>
            <p>Author: {model.author}</p>
            <p>Task Nature: {model.taskNature}</p>
        </div>
        <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Close</button>
        </div>
    </div>
    </div>
    </div>
  );
}

export default ModelModal;

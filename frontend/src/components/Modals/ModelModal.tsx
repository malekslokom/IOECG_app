import React from 'react';
// import { Modal, Button, Input, Flex, Tag } from 'antd';

import './ModelModal.css';

interface ModelModalProps {
  model: Model;
  onClose: () => void;
}

const ModelModal: React.FC<ModelModalProps> = ({ model, onClose }) => {
  return (
    // <Modal
    //   title={model.name}
    //   visible={true}
    //   onCancel={onClose}
    //   footer={null}
    //   width={600}
    // >
<div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">{model.name}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">       
        <div className="modal-section">
          <p className="modal-section-title">Informations sur le modèle</p>
          <div className="section-box">
          <div className="d-flex justify-content-between">
              <div className="input-group mb-3">
                <span className="input-group-text">Auteur</span>
                <input type="text" className="form-control" value="{model.author}" readOnly/>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Nom de projet</span>
                <input type="text" className="form-control" value="{model.projectName}" readOnly/>
              </div>
          </div>
          <textarea className="form-control" rows={4} readOnly>{model.description}</textarea>

          </div>
        </div>
      </div>
      <div className="modal-section">
        <p className="modal-section-title">Architecture</p>
        <div className="section-box">
          <div className="d-flex justify-content-between">
            <div className="input-group mb-3">
              <span className="input-group-text">Nom</span>
              <input type="text" className="form-control" value="{model.architectureName}" readOnly/>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Version</span>
              <input type="text" className="form-control" value="{model.architectureVersion}" readOnly/>
            </div>
          </div>
          <textarea className="form-control" rows={4} readOnly>{model.architectureDescription}</textarea>
        </div>
      </div>

      <div className="modal-section">
        <p className="modal-section-title">Informations Additionnelles</p>
        <div className="section-box">
          <div className="d-flex flex-wrap gap-2 justify-content-between mb-4">
            <div>
              <h4 className="tag-title">Total des Paramètres</h4>
              <span className="badge bg-secondary">{model.totalParams}</span>
            </div>
            <div>
              <h4 className="tag-title">Taille du Modèle</h4>
              <span className="badge bg-secondary">{model.modelSize}</span>
            </div>
            <div>
              <h4 className="tag-title">Taille du Batch</h4>
              <span className="badge bg-secondary">{model.hyperparameters.batchSize}</span>
            </div>
          </div>
          <div className="d-flex flex-wrap gap-2 justify-content-between">
            <div>
              <h4 className="tag-title">Taux d'Apprentissage</h4>
              <span className="badge bg-secondary">{model.hyperparameters.learningRate}</span>
            </div>
            <div>
              <h4 className="tag-title">Nature de la Tâche</h4>
              <span className="badge bg-secondary">{model.taskNature}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="modal-footer"  >
        {/* <Button className="custom-button" onClick={onClose}>
          Fermer
        </Button> */}
         <button type="button" className="custom-button" data-dismiss="modal" onClick={onClose}>Fermer</button>
      </div>
    
    
    </div>
  </div>
</div>
  );
}

export default ModelModal;

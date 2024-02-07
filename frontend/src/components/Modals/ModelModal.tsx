import React from 'react';
import { Modal, Button, Input, Flex, Tag } from 'antd';

import './ModelModal.css';

interface ModelModalProps {
  model: Model;
  onClose: () => void;
}

const ModelModal: React.FC<ModelModalProps> = ({ model, onClose }) => {
  return (
    <Modal
      title={model.name}
      visible={true}
      onCancel={onClose}
      footer={null}
      width={600}
    >

      <div className="modal-body">       
        <div className="modal-section">
          <p className="modal-section-title">Informations sur le modèle</p>
          <div className="section-box">
            <Flex justify="space-between">
              <div>
                <Input addonBefore="Auteur" value={model.author} readOnly />
                <Input addonBefore="Nom de projet" value={model.projectName} readOnly />
              </div>
            </Flex>
            <Input.TextArea
              rows={4}
              value={model.description}
              autoSize={{ minRows: 4, maxRows: 8 }}
              readOnly
            />
          </div>
        </div>

        <div className="modal-section">
          <p className="modal-section-title">Architecture</p>
          <div className="section-box">
            <Flex justify="space-between">
              <div>
                <Input addonBefore="Nom" value={model.architectureName} readOnly />
                <Input addonBefore="Version" value={model.architectureVersion} readOnly />
              </div>
            </Flex>
            <Input.TextArea
              rows={4}
              value={model.architectureDescription}
              autoSize={{ minRows: 4, maxRows: 8 }}
              readOnly
            />
          </div>
        </div>
        <div className="modal-section">
        <p className="modal-section-title">Informations Additionnelles</p>
        <div className="section-box">
          <Flex wrap="wrap" gap="small"  justify="space-between" style={{ marginBottom: '20px' }}>
          
            <div>
              <h4 className="tag-title">Total des Paramètres</h4>
              <Tag className='tag'>{model.totalParams}</Tag>
              
            </div>
            
            <div>
              <h4 className="tag-title">Taille du Modèle</h4>
              <Tag className='tag'>{model.modelSize}</Tag>
              
            </div>
            <div>
              <h4 className="tag-title">Taille du Batch</h4>
                <Tag className='tag'>{model.hyperparameters.batchSize}</Tag>
            </div>
            </Flex>



            <Flex wrap="wrap" gap="small"  justify="space-between" >
          
            <div>
               <h4 className="tag-title">Taux d'Apprentissage</h4>
               <Tag className='tag'>{model.hyperparameters.learningRate}</Tag>
               
            </div>
            
            <div>
              <h4 className="tag-title">Nature de la Tâche</h4>
              <Tag className='tag'>{model.taskNature}</Tag> 
            </div>
          
            </Flex>
          </div>
      </div>
      </div>
      <div className="modal-footer"  style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button className="custom-button" onClick={onClose}>
          Fermer
        </Button>
      </div>
    </Modal>
  );
}

export default ModelModal;

import React, { useState } from 'react';


interface Analyse {
    dateCreation: string ;
    nom: string;
    auteur: string;
    description: string;
  }

interface CreateAnalyseModalProps {
  onClose: () => void;
  onCreate: (newAnalyse: Analyse) => void;
}

const CreateAnalyseModal: React.FC<CreateAnalyseModalProps> = ({ onClose, onCreate }) => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newAnalyse: Analyse = {
      nom: name,
      description: description,
      auteur: 'Andy',
      dateCreation: new Date().toLocaleDateString('fr-FR')
    };

    onCreate(newAnalyse);

    setName('');
    setDescription('');
    onClose();
  };

  return (
    <div className="modal">
    <div className="container"> 
      <div className="modal-header">
        <span>Nouvelle Analyse</span>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom *</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="create-btn">Créer</button>
        </div>
      </form>
      </div>
    </div>
    /*<div className="modal" tabIndex={-1} role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Nouvelle Analyse</h5>
            <button type="button" className="close" onClick={onClose} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="name">Nom *</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  className="form-control"
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Fermer</button>
              <button type="submit" className="btn btn-primary">Créer</button>
            </div>
          </form>
        </div>
      </div>
    </div>*/
  );
};

export default CreateAnalyseModal;

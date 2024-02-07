import React, { useState } from 'react';
import "./CreateAnalyseModal.css"

interface CreateAnalyseModalProps {
  onClose: () => void;
  onCreate: (newAnalyse: Analyse) => void;
}

const CreateAnalyseModal: React.FC<CreateAnalyseModalProps> = ({ onClose, onCreate }) => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [dateCreation, setDateCreation] = useState<Date>(new Date());

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newAnalyse: Analyse = {
        name: name,
        description: description,
        author: 'Andy' ,// Vous pouvez remplacer par le nom de l'utilisateur actuel
        dateCreation: dateCreation.toLocaleDateString('fr-FR')
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
  );
};

export default CreateAnalyseModal;

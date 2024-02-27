import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync, faFilter } from '@fortawesome/free-solid-svg-icons';
import { Button, Form } from "react-bootstrap";
import "./HeadList.css";

const HeadList: React.FC = () => {

  const handleDateChange = () => {
    // Logique pour le changement de date
  };

  const handleTypeChange = () => {
    // Logique pour le changement de type
  };

  const handleVersionChange = () => {
    // Logique pour le changement de version
  };

  const handleFilterClick = () => {
    // Logique pour le clic sur le bouton de filtre
  };

  const handleSearch = (value: string) => {
    // Logique pour la recherche
  };

  return (
    <div className="filters">
        <div className="sync">
        <Button variant="light"  >
        <FontAwesomeIcon icon={faSync} style={{ fontSize: '1.5em', color: 'rgba(59,153,255,255)' }} />
      </Button>
        </div>
      <div className="Date">
      <Form.Control type="date" onChange={handleDateChange} style={{ width: 200, fontSize: '1.2em' }} />
        <Form.Control type="date" onChange={handleDateChange} style={{ width: 200, fontSize: '1.2em'  }} />
      </div>

    <div className="Search"><Form.Control type="text" placeholder="chercher ...." className="search-bar" style={{ width: 400, fontSize: '1.3em'}} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)} /></div>
    <div className="filtreHead">
        <Button variant="light" style={{ width: 100, fontSize:  '1.2em'}} onClick={handleFilterClick}>
        <FontAwesomeIcon icon={faFilter} />
        Filtre
      </Button>
        </div>
    </div>
  );
}

export default HeadList;

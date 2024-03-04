import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync, faFilter } from '@fortawesome/free-solid-svg-icons';
import React from 'react';


const HeaderList: React.FC = () => {

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

              <div className="row align-items-center">
                <div className="col-auto">
                  <button className="btn btn-light">
                    <FontAwesomeIcon icon={faSync} style={{ fontSize: '1.5em', color: 'rgba(59,153,255,255)' }} />
                  </button>
                </div>
                <div className="col">
                  <input type="date" onChange={handleDateChange}  className="form-control" />
                </div>
                <div className="col">
                  <input type="date" onChange={handleDateChange} className="form-control" />
                </div>
                <div className="col">
                  <input type="text" placeholder="chercher ...." className="form-control" style={{ width: "100%" }} onChange={(e) => handleSearch(e.target.value)}/>
                </div>
                <div className="col-auto">
                  <button className="btn btn-light" onClick={handleFilterClick} >
                    <FontAwesomeIcon icon={faFilter} />
                    Filtrer
                  </button>
                </div>
                <hr className="my-3"  style={{color:"#555"}}/>
              </div>
              
            </div>
    );

}
export default HeaderList;
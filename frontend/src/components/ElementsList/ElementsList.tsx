
import React , {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEye } from '@fortawesome/free-solid-svg-icons';

interface ListProps {
    columns: string[];
    elementsList: any[];
    onDelete: (index: number) => void;
    onShow: (index: number) => void;
}

//Chose à corriger: la pagination
const ElementsList: React.FC<ListProps> = ({columns, elementsList, onShow, onDelete}) => {
  
    const [currentPage, setCurrentPage] = useState(1);

    const elementsPerPage = 12; // Nombre d'éléments par page
    const totalPages = Math.ceil(elementsList.length / elementsPerPage);

    const startIndex = (currentPage - 1) * elementsPerPage;
    const endIndex = Math.min(startIndex + elementsPerPage, elementsList.length);
    const paginatedElements = elementsList.slice(startIndex, endIndex);

    
      const onPageChange = (page: number) => {
          setCurrentPage(page);
          // Afficher les élements de la page selon le numéro de la page
          const startIndex = (page - 1) * elementsPerPage;
          const endIndex = Math.min(startIndex + elementsPerPage, elementsList.length);
          const newPaginatedElements = elementsList.slice(startIndex, endIndex);
          
          // Mettre à jour paginatedElements avec les nouveaux élements de la page
          //setPaginatedElements(newPaginatedElements);
      };

    return (
      <div>
       
      <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {paginatedElements.map((item) => (
            <tr key={item.id}>
              {Object.keys(item).map((key, index) => (
                <td key={index}>{item[key]}</td>
              ))}
              <td>
                <FontAwesomeIcon icon={faEye} onClick={() => onShow(item.id)} style={{ cursor: 'pointer' }}/>
              </td>
              <td>
                <FontAwesomeIcon icon={faTrash} onClick={() => onDelete(item.id)} style={{ cursor: 'pointer' }}  />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      <nav aria-label="page-navigation-container" className="pagination-nav" style={{ marginTop: '250px' }} >
  <ul className="pagination justify-content-end" >
    {/* Bouton "Précédent" */}
    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
      <button className="page-link" onClick={() => onPageChange(currentPage - 1)} style={{ cursor: 'pointer' }}>
        &laquo;
      </button>
    </li>
    {/* Liste des pages */}
    {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
      <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
        <button
          className="page-link" onClick={() => onPageChange(page)} style={{ cursor: 'pointer' }}>
          {page}
        </button>
      </li>
    ))}
    {/* Bouton "Suivant" */}
    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
      <button className="page-link" onClick={() => onPageChange(currentPage + 1)} style={{ cursor: 'pointer' }}>
        &raquo;
      </button>
    </li>
  </ul>
</nav>

    
    </div>
    );

}
export default ElementsList;
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import ListPage from '../../../components/ListPage/ListPage'
import ElementsList from '../../../components/ElementsList/ElementsLits';
import CreateAnalyseModal from '../../../components/Modals/CreateAnalyseModal';
import ConfirmationArchiverModal from '../../../components/Modals/ConfirmationArchiverModal';


const AnalyseProjetPage = () => {

  const [listAnalyses, setListAnalyses] = useState([
    { dateCreation:"01/01/24",  nom: "nom", auteur: "auteur", description: " description"},
    { dateCreation:"01/01/24",  nom: "nom2", auteur: "auteur2", description: " description2" },
    { dateCreation:"01/01/24", nom: "nom3", auteur: "auteur3", description: " description3"}
  ]);

  const [colonnes, setColumns] = useState(["dateCreation", "nom", "auteur", "description"]);

  const [newAnalyseModal, setNewAnalyseModal] = useState<boolean>(false);

  const [showConfirmationModal, setShowConfirmationModal] = useState<boolean>(false);
  const [selectedAnalyse, setSelectedAnalyse] = useState<number | null>(null);


  const navigate = useNavigate();


  /*Actions relatif au modal de création */
  const buttonClick = () => {
        setNewAnalyseModal(true);
        console.log("Bouton Ajouter cliqué !");
    };

    const handleCreateAnalyse = (newAnalyse: Analyse) => {
        console.log('Nouvelle analyse créée:', newAnalyse);
        setListAnalyses([...listAnalyses, newAnalyse]);
    };

    const handleCloseModal = () => {
        setNewAnalyseModal(false);
    };

  /*Actions sur une analyse */
  const handleShowAnalyse = (index: number) => {
    navigate(`/projets/analyses/${index}`);
    console.log('Analyse ouverte');
};

  const handleDeleteAnalyse = (index: number) => {
    setSelectedAnalyse(index);
    setShowConfirmationModal(true);
    console.log('Analyse cliquée et supprimée');
  };

  const handleConfirmDelete = () => {
    if (selectedAnalyse!== null) {
      const updatedList = [...listAnalyses];
      updatedList.splice(selectedAnalyse, 1);
      setListAnalyses(updatedList);

      setSelectedAnalyse(null);
      setShowConfirmationModal(false);
      console.log('Analyse supprimée');
    }
  };

  const handleCloseConfirmationModal = () => {
      setShowConfirmationModal(false);
      setSelectedAnalyse(null);
  };

  return (
    <div>
      <div className="position-relative">
          <ListPage title='Analyses' bouton='Créer'onClick={buttonClick} />
          <div className="position-absolute" style={{ top: "160px", left: 0, width: '100%' }}>
            <ElementsList columns={colonnes} elementsList={listAnalyses} onShow={handleShowAnalyse}  onDelete={handleDeleteAnalyse} />
          </div>
          </div>
        {newAnalyseModal && <CreateAnalyseModal onClose={handleCloseModal} onCreate={handleCreateAnalyse}/> }
        <ConfirmationArchiverModal isOpen={showConfirmationModal} onClose={handleCloseConfirmationModal} onConfirm={handleConfirmDelete} />
          
    </div>
  )
}

export default AnalyseProjetPage;

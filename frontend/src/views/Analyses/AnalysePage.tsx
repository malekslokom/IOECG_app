import React, { useEffect, useState } from 'react';
import ListAnalyses from '../../components/ListAnalyses/ListAnalyses';
import './AnalysePage.css'
import CreateAnalyseModal from '../../components/Modals/CreateAnalyseModal';



const AnalysePage = () => {

    const [listAnalyses, setListAnalyses] = useState<any[]>([
        {
            name: 'Analyse 1',
            creationDate: '2022-02-04',
            author: 'Andy',
            description: 'Description de l\'analyse 1'
        }
    ]);

    const [newAnalyseModal, setNewAnalyseModal] = useState<boolean>(false);


    const AddButtonClick = () => {
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

    return (
        <div className='analyse-page'>
            <div className="content-head">
                <h2> Analyses </h2>
                <button className="add-button"  onClick={AddButtonClick}>Ajouter</button>
                <hr/>
            </div>
            <div className='list-analyse-container'> 
                <ListAnalyses  analyses={listAnalyses}/>
            </div>

            {newAnalyseModal && <CreateAnalyseModal onClose={handleCloseModal} onCreate={handleCreateAnalyse} />}
      
        </div>

    );

};

export default AnalysePage;
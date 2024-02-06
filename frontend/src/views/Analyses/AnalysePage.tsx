import React, { useEffect, useState } from 'react';
import ListAnalyses from '../../components/ListAnalyses/ListAnalyses';
import './AnalysePage.css'



const AnalysePage = () => {

    const [listAnalyses, setListAnalyses] = useState<any[]>([
        {
            name: 'Analyse 1',
            creationDate: '2022-02-04',
            author: 'Andy',
            description: 'Description de l\'analyse 1'
        },
        {
            name: 'Analyse 2',
            creationDate: '2022-02-05',
            author: 'Andy',
            description: 'Description de l\'analyse 2'
        }
    ]);
    

    const AddButtonClick = () => {
        console.log("Bouton Ajouter cliqué !");
    };

    return (
        <div className='analyse-page'>
            <div className="content-head">
                <h2> Analyses </h2>
                <button className="add-button"  onClick={AddButtonClick}>Ajouter</button>
                <hr/>
                <br/>
            </div>
            
       
        </div>

    );

};

export default AnalysePage;
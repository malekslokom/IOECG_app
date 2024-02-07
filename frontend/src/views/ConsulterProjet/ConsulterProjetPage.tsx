import React from 'react'
import "./ConsulterProjetPage.css";
import InfosProjet from '../../components/InfosProjet/InfosProjet';
import AnalysesExperiencesProjet from '../../components/AnalysesProjet/AnalysesExperiencesProjet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const projectData = {
    name: "Projet_2",
    author: "Andy",
    creationDate: "10/12/2023",
    version: "V1",
    description: "C’est un projet de classification du type de médicament 1"
  };

  let analysesData: { key: number; name: string; dateCreation: string; author: string; }[] = [];

  for (let i = 1; i<5; i++){

analysesData.push({key: i,
name: 'Analyse_1',
dateCreation: '10/12/2023',
author: 'Andy'});
  }  

const ConsulterProjetPage = () => {
  return (
    
    <div className="Bloc">
    <div className="Bloc1">
        <div>
        <div>
          <FontAwesomeIcon icon={faArrowLeft}  className="fleche"/>
        </div>
        <InfosProjet project={projectData} />
        <div className="analyses">
        <AnalysesExperiencesProjet title="Analyses Récentes" data={analysesData} />    
        </div>

        <div className="experiences">
        <AnalysesExperiencesProjet title="Expériences Récentes" data={analysesData} />    
        </div>
            
        </div>
   </div>
  </div>
  )
}

export default ConsulterProjetPage
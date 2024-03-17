import React from "react";
import "./ConsulterProjetPage.css";
import InfosProjet from "../../../components/InfosProjet/InfosProjet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import AnalysesExperiencesProjet from "../../../components/AnalysesExperiencesProjet/AnalysesExperiencesProjet";

const projectData = {
  name: "Projet_2",
  author: "Andy",
  creationDate: "10/12/2023",
  version: "V1",
  description: "C’est un projet de classification du type de médicament 1",
};

let analysesData: {
  key: number;
  name: string;
  dateCreation: string;
  author: string;
}[] = [];

for (let i = 1; i < 8; i++) {
  analysesData.push({
    key: i,
    name: "Analyse_1",
    dateCreation: "10/12/2023",
    author: "Andy",
  });
}

const ConsulterProjetPage = () => {
  return (
    <div className="Bloc">
      <div>
        <button>
          <FontAwesomeIcon icon={faArrowLeft} className="fleche" />
        </button>
      </div>
      <div className="InfosProjet">
        <InfosProjet project={projectData} />
      </div>
      <div className="analyses">
        <AnalysesExperiencesProjet
          title="Analyses Récentes"
          data={analysesData}
        />
      </div>
      <div className="experiences">
        <AnalysesExperiencesProjet
          title="Expériences Récentes"
          data={analysesData}
        />
      </div>
    </div>
  );
};

export default ConsulterProjetPage;

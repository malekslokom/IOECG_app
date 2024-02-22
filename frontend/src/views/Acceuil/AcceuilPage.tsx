import React from "react";
import StatsAcceuil from "../../components/StatsAcceuil/StatsAcceuil";
import "./AcceuilPage.css";
import analyse from "../../assets/Acceuil/analysing.png";
import projets from "../../assets/Acceuil/project-plan.png";
import datasets from "../../assets/Acceuil/data-transfer.png";
import rapports from "../../assets/Acceuil/repports.png";
import noProject from "../../assets/Acceuil/no-project.png";

const AcceuilPage = () => {
  return (
    <div className="Acceuil">
      <div className="welcome-section">
        <h1>Welcome, Andy</h1>
        <h4>revenez ou commencez quelque chose de nouveau</h4>
      </div>

      <div className="stats-section">
        <StatsAcceuil icon={projets} title="Projets" count={0} />
        <StatsAcceuil icon={analyse} title="Analyses" count={0} />
        <StatsAcceuil icon={datasets} title="Datasets" count={0} />
        <StatsAcceuil icon={rapports} title="Rapports" count={0} />
      </div>
      <div className="no-project-section">
        <img src={noProject} alt="No Project Found" />
        <h4 >
          Nous supposons que c'est votre première fois ! <br />
          Créez un projet maintenant pour commencer !
        </h4>
        <button>Créer un Projet</button>
      </div>
    </div>
  );
};

export default AcceuilPage;

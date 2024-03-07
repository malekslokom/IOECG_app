
import "./AccueilPage.css";
import analyse from "../../assets/Accueil/analysing.png";
import projets from "../../assets/Accueil/project-plan.png";
import datasets from "../../assets/Accueil/data-transfer.png";
import rapports from "../../assets/Accueil/repports.png";
import noProject from "../../assets/Accueil/no-project.png";
import StatsAccueil from "../../components/StatsAccueil/StatsAccueil";

const AccueilPage = () => {
  return (
    <div className="Accueil">
      <div className="welcome-section">
        <h1>Welcome, Andy</h1>
        <h4>revenez ou commencez quelque chose de nouveau</h4>
      </div>

      <div className="stats-section">
        <StatsAccueil icon={projets} title="Projets" count={0} />
        <StatsAccueil icon={analyse} title="Analyses" count={0} />
        <StatsAccueil icon={datasets} title="Datasets" count={0} />
        <StatsAccueil icon={rapports} title="Rapports" count={0} />
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

export default AccueilPage;

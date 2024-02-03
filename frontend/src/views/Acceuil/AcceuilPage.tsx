import React from 'react'
import StatsAcceuil from '../../components/StatsAcceuil/StatsAcceuil'
import "./AcceuilPage.css";
import analyse from "../../assets/Acceuil/analyse.png"
import projets from "../../assets/Acceuil/projets.png"
import datasets from "../../assets/Acceuil/datasets.png"
import rapports from "../../assets/Acceuil/rapports.png"
import noProject from "../../assets/Acceuil/noProject.png"

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
       <hr className='hr'/>
       <div className="no-project-section">
        <img src={noProject} alt="No Project Found" className='noProject'/>
        <h4 className='welcome-section'>Nous supposons que c'est votre première fois ! <br/>Créez un projet maintenant pour commencer !</h4>
        <button className="create-project-button">Créer un Projet</button>
       </div>
      </div>

  );
}

export default AcceuilPage
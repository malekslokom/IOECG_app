import React, {useState} from 'react'
import ListPage from '../../../components/ListPage/ListPage'
import ElementsList from '../../../components/ElementsList/ElementsList';

const AnalyseProjetPage = () => {

  const [analyse, setAnalyses] = useState([
    { date:"01/01/24", analyse: "Analyse", nom: "nom", auteur: "auteur", description: " description", dimension: "dimension" },
    { date:"01/01/24", analyse: "Analyse2", nom: "nom2", auteur: "auteur2", description: " description2", dimension: "dimension2" },
    { date:"01/01/24", analyse: "Analyse3", nom: "nom3", auteur: "auteur3", description: " description3", dimension: "dimension3" }
  ]);

  const [colonnes, setColumns] = useState(["date","analyse", "nom", "auteur", "description", "dimension"]);

  const handleShowAnalyse = (index: number) => {
    console.log('Analyse ouverte');
};

const handleDeleteAnalyse = (index: number) => {
  console.log('Analyse supprimée');
};

  return (
    <div>
      <div className="position-relative">
          <ListPage title='Analyses' bouton='Créer'></ListPage>
          <div className="position-absolute" style={{ top: "160px", left: 0, width: '100%' }}>
            <ElementsList columns={colonnes} elementsList={analyse} onShow={handleShowAnalyse}  onDelete={handleDeleteAnalyse} />
          </div>
          </div>
      
    </div>
  )
}

export default AnalyseProjetPage

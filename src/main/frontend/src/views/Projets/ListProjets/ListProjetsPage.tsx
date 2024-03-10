import "./ListProjetsPage.css";
import ListPage from "../../../components/ListPage/ListPage";
import ElementsList from "../../../components/ElementsList/ElementsLits";
import { useState, useEffect } from "react";
import CreateProjetModal from "../../../components/Modals/CreateProjetModal";
import { fetchProjets } from "../../../services/ProjetService";

const ListProjetsPage = () => {
  const [listProjets, setListProjets] = useState<Projet[]>([]);
  useEffect(() => {
    fetchProjets()
      .then((data) => setListProjets(data))
      .catch((error) => console.error("Error fetching analyses:", error));
  }, []);

  const [columns, setColumns] = useState([
    "Nom",
    "Date Création",
    "Auteur",
    "Version",
    "Type",
  ]);
  const [newProjetModal, setNewProjetModal] = useState<boolean>(false);

  /*Actions relatif au modal de création */
  const buttonClick = () => {
    setNewProjetModal(true);
    console.log("Bouton Ajouter cliqué !");
  };

  function onShow(): void {
    console.log("Analyse ouverte");
  }

  function onDelete(): void {
    console.log("onDelete");
  }

  const handleCreateProjet = (newProjet: Projet) => {
    console.log("Nouveau projet créé:", newProjet);
    setListProjets([...listProjets, newProjet]);
  };

  const handleCloseModal = () => {
    setNewProjetModal(false);
  };

  const handleDeleteProjet = (index: number) => {
    const updatedList = listProjets.filter((_, i) => i !== index);
    setListProjets(updatedList);
    console.log("Projet supprimée");
  };

  return (
    <div>
      <div className="position-relative">
        {/*<ListProjets projects={projects}  />*/}
        <ListPage
          title="Projets"
          bouton="Créer"
          boutonVisible={true}
          onClick={buttonClick}
        />
        <div
          className="position-absolute"
          style={{ top: "160px", left: 0, width: "100%" }}
        >
          <ElementsList
            columns={columns}
            nameModule="projet"
            elementsList={listProjets}
            onDelete={handleDeleteProjet}
            onShow={onShow}
          />
        </div>

        {newProjetModal && (
          <CreateProjetModal
            onClose={handleCloseModal}
            onCreate={handleCreateProjet}
          />
        )}
      </div>
    </div>
  );
};

export default ListProjetsPage;

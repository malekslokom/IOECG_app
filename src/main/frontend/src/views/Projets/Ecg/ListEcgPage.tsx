import React, { useState } from "react";
import ElementsList from "../../../components/ElementsList/ElementsLits";
import ListPage from "../../../components/ListPage/ListPage";

function ListEcgPage() {
  const [listEcg, setListEcg] = useState<Ecg[]>([
    {
      idPatient: 1,
      origine_dataset_id: 1,
      filepath: "/chemin/vers/fichier1",
      recording_started_at: "15/03/22",
      recording_ended_at: "20/04/22",
      recording_initial_sampling_rate: 100,
      recording_sampling_rate: 100,
      recording_duration: "1:00:00",
      protocol_details: "Détails du protocole 1",
    },
    {
      idPatient: 2,
      origine_dataset_id: 1,
      filepath: "/chemin/vers/fichier2",
      recording_started_at: "15/03/22",
      recording_ended_at: "01/04/22",
      recording_initial_sampling_rate: 100,
      recording_sampling_rate: 100,
      recording_duration: "1:30:00",
      protocol_details: "Détails du protocole 2",
    },
    {
      idPatient: 3,
      origine_dataset_id: 2,
      filepath: "/chemin/vers/fichier3",
      recording_started_at: "15/06/22",
      recording_ended_at: "15/07/22",
      recording_initial_sampling_rate: 200,
      recording_sampling_rate: 200,
      recording_duration: "2:00:00",
      protocol_details: "Détails du protocole 3",
    },
  ]);

  const [columns, setColumns] = useState([
    "idPatient",
    "origine_dataset_id",
    "filepath",
    "recording_started_at",
    "recording_ended_at",
    "recording_initial_sampling_rate",
    "recording_sampling_rate",
    "recording_duration",
    "protocol_details",
  ]);

  const [showConfirmationModal, setShowConfirmationModal] =
    useState<boolean>(false);
  const [selectedEcg, setSelectedEcg] = useState<number | null>(null);

  const buttonClick = () => {
    console.log("Bouton cliqué !");
  };

  const handleShowEcg = (index: number) => {
    console.log("Ecg ouvert !");
  };

  /*Supprimer un ECG + confirmation*/
  const handleDeleteEcg = (index: number) => {
    setSelectedEcg(index);
    setShowConfirmationModal(true);
    console.log("Ecg  cliqué et supprimé");
  };

  const handleConfirmDeleteEcg = () => {
    if (selectedEcg !== null) {
      const updatedList = [...listEcg];
      updatedList.splice(selectedEcg, 1);
      setListEcg(updatedList);

      setSelectedEcg(null);
      setShowConfirmationModal(false);
      console.log("Ecg supprimé");
    }
  };

  const handleCloseConfirmationModal = () => {
    setShowConfirmationModal(false);
    setSelectedEcg(null);
  };

  return (
    <div>
      <div className="position-relative">
        <ListPage
          title="ECG"
          bouton="Créer"
          boutonVisible={false}
          onClick={buttonClick}
        />
        <div
          className="position-absolute"
          style={{ top: "160px", left: 0, width: "100%" }}
        >
          <ElementsList
            nameModule="ecg"
            columns={columns}
            elementsList={listEcg}
            onDelete={handleDeleteEcg}
            onShow={handleShowEcg}
          />
        </div>
      </div>
    </div>
  );
}

export default ListEcgPage;

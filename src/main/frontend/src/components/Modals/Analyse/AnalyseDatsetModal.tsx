import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import datasets from './datasetFakeData';
import Table from 'react-bootstrap/Table';
import HeaderDataset from '../../HeaderList/HeaderDataset';
import PlotComponent from '../../Plots/PlotComponent';


interface AnalyseDatsetModalProps {
  onClose: () =>void;
  onCreate: (newDatasets: Dataset[]) => void;
}

const AnalyseDatsetModal: React.FC<AnalyseDatsetModalProps> = ({ onClose, onCreate }) => {
  const [selectedDatasets, setSelectedDatasets] = useState<Dataset[]>([]);
  const [selectedECGs, setSelectedECGs] = useState<ECG[]>([]);

  // const handleDatasetClick = (dataset: Dataset) => {
  //   if (!selectedDatasets.includes(dataset)) {
  //     // Case 1: Check a dataset
  //     setSelectedDatasets(prevSelectedDatasets => [...prevSelectedDatasets, dataset]);
  //   } else {
  //     // Case 2: Show details and ECGs of a dataset
  //     setSelectedECGs([]);
  //   }
  // };

  // const handleDatasetClick = (dataset: Dataset) => {
  //   if (selectedDatasets.includes(dataset)) {
  //     // Dataset is already selected, so remove it
  //     setSelectedDatasets(prevSelectedDatasets =>
  //       prevSelectedDatasets.filter(item => item !== dataset)
  //     );
  //   } else {
  //     // Dataset is not selected, so add it
  //     setSelectedDatasets(prevSelectedDatasets => [...prevSelectedDatasets, dataset]);
  //   }
  // };
  
  const handleECGSelection = (ecg: ECG) => {
    setSelectedECGs(prevSelectedECGs => {
      const index = prevSelectedECGs.findIndex(selectedECG => selectedECG.id === ecg.id);
      if (index !== -1) {
        return prevSelectedECGs.filter(selectedECG => selectedECG.id !== ecg.id);
      } else {
        return [...prevSelectedECGs, ecg];
      }
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCreate(selectedDatasets);
    console.log(selectedECGs);
    console.log(selectedDatasets);
    onClose();
  };

  const handleCheckboxChange = (dataset: Dataset) => {
    if (selectedDatasets.includes(dataset)) {
      // Dataset already exists, so remove it
      setSelectedDatasets(prevSelectedDatasets => prevSelectedDatasets.filter(item => item !== dataset));
    } else {
      // Dataset doesn't exist, so add it
      setSelectedDatasets(prevSelectedDatasets => [...prevSelectedDatasets, dataset]);
    }
  };
  
  
  const handleClose = () => {
    setSelectedDatasets([]); // Clear selected ECGs
    setSelectedECGs([]);// Clear selected ECGs
    onClose(); // Close the modal
  };

 
  return (
    <Modal show onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Datasets</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-3">
          <Table>
            <tbody>
              {datasets.map(dataset => (  
                // onClick={() => handleDatasetClick(dataset)} 
                <tr key={dataset.id} className={selectedDatasets.includes(dataset) ? 'selected' : ''}>
                  <td style={{ width: '10px' }}>
                    <input
                      type="checkbox"
                      onChange={() => handleCheckboxChange(dataset)}
                      checked={selectedDatasets.includes(dataset)}
                    />
                  </td>
                  <td>
                    <div style={{ whiteSpace: 'nowrap' }}>{dataset.name}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          </div>
          <div className="col-md-9">
            <HeaderDataset></HeaderDataset>
            {selectedDatasets.map(dataset => (
              <div key={dataset.id}>
                <div className="modal-section">
                  <p className="modal-section-title">Informations sur {dataset.name}</p>
                  <div className="section-box">
                      <div className="input-group mb-3">
                        <span className="input-group-text">Description</span>
                        <input type="text" className="form-control" value={dataset.description} readOnly />
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text">Type</span>
                        <input type="text" className="form-control" value={dataset.type} readOnly />
                      </div>

                      <div className="input-group mb-3">
                        <span className="input-group-text col col-12">Les ECGs</span>
                      </div>
                      <div className="input-group mb-3">

                        <Table>
                          <tbody>
                            {dataset.ecgs.map(ecg => (
                              <><tr key={ecg.id} className={selectedECGs.includes(ecg) ? 'selected' : ''} style={{ display: 'flex', alignItems: 'center' }}>
                                <td style={{ display: 'flex', alignItems: 'center' }}>
                                  <input type="checkbox" onChange={() => handleECGSelection(ecg)} checked={selectedECGs.includes(ecg)} />
                                  <div style={{ whiteSpace: 'nowrap', marginLeft: '5px' }}>
                                    <h6 style={{ margin: 0 }}>
                                      Patient {ecg.patientId}
                                    </h6>
                                  </div>
                                </td>
                              </tr><tr>
                                  {/* <div style={{ whiteSpace: 'nowrap' }}>{ecg.filepath}</div> */}
                                  <PlotComponent data={ecg.data} />
                                </tr></>
                            ))}
                          </tbody>
                        </Table>


                        {/* <ul className="ecg-list">
                          {dataset.ecgs.map(ecg => (
                            <li key={ecg.id}>
                              <input type="checkbox" onChange={() => handleECGSelection(ecg)} checked={selectedECGs.includes(ecg)} />
                              {ecg.filepath}
                            </li>
                          ))}
                        </ul> */}
                      </div>
                  </div>
                </div>

                {/* <h3>Details of {dataset.name}</h3>
                <p>{dataset.description}</p>
                <h3>ECGs in {dataset.name}</h3>
                <ul className="ecg-list">
                  {dataset.ecgs.map(ecg => (
                    <li key={ecg.id}>
                      <input type="checkbox" onChange={() => handleECGSelection(ecg)} checked={selectedECGs.includes(ecg)} />
                      {ecg.filepath}
                    </li>
                  ))}
                </ul> */}
              </div>
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Form onSubmit={handleSubmit}>
          <Button type="submit" className='custom-button' >
            Ajouter
          </Button>
        </Form>
        <Button onClick={handleClose} variant="secondary">
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AnalyseDatsetModal;

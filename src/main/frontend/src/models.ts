interface Model {
  inputShape: number[];
  outputShape: number[];
  name: string;
  description: string;
  author: string;
  projectName: string;
  architectureName: string;
  architectureVersion: string;
  architectureDescription: string;
  totalParams: number;
  modelSize: string;
  hyperparameters: { [key: string]: string };
  architectureImage: string;
  taskNature: string;
}

interface Analyse {
  nom: string;
  dateCreation: string ;
  auteur: string;
  description: string;  
  
};

interface Projet {
  nom: string ;
  dateCreation: string;
  auteur: string;
  version: string;    
  type: string; 
}

interface Dataset {
    nom: string ;
    dateCreation: string;
    auteur: string;
    description: string;    
    type: string; 
  }

  interface Ecg {
    idPatient: number,
    origine_dataset_id: number
    filepath: string,
    recording_started_at: string;
    recording_ended_at: string;
    recording_initial_sampling_rate: number;
    recording_sampling_rate: number;
    recording_duration: string;
    protocol_details: string;
  }

interface Rapport {
nom: string ;
dateCreation: string;

modeles: string[];   //ou Model[]  ?
datasets: string[] // ou Dataset[] ?
}
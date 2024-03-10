interface Model {
    // inputShape: number[];
    // outputShape: number[];
    name: string;
    description: string;
    author: string;
    project_name: string;
    architecture_name: string;
    architecture_version: string;
    architecture_description: string;
    total_params: number;
    model_size: string;
    batch_size: string;
    learning_rate:Float32Array;
  //  hyperparameters: { [key: string]: string };

   // architectureImage: string;
    task_nature: string;
  }


  interface Analyse {
    dateCreation: string ;
    nom: string;
    auteur: string;
    description: string;    
  };
  
  interface Projet {
    dateCreation: string;
    nom: string ;
    auteur: string;
    type: string; 
    version:string;
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
  dateCreation: string;
  nom: string ;
  modeles: string[];   //ou Model[]  ?
  datasets: string[] // ou Dataset[] ?
}
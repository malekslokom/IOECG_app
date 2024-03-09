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
    dateCreation: string ;
    nom: string;
    auteur: string;
    description: string;    
  };
  
  interface Projet {
    dateCreation: string;
    nom: string ;
    auteur: string;
    version: string;    
    type: string; 
  }

  interface Dataset {
      nom: string ;
      dateCreation: string;
      auteur: string;
      version: string;    
      type: string; 
    }

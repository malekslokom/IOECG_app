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
      version: string;    
      type: string; 
    }

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

  
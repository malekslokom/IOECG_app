export async function fetchModels(): Promise<Model[]> {
    const response = await fetch('http://127.0.0.1:5000/api/models');
    if (!response.ok) {
      throw new Error('Failed to fetch models');
    }
    return await response.json();
  }
  
  export async function fetchProjets(): Promise<Projet[]> {
    const response = await fetch('http://127.0.0.1:5000/api/projets');
    if (!response.ok) {
      throw new Error('Failed to fetch projets');
    }
    return await response.json()};
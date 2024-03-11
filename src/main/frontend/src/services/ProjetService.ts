export async function fetchProjets(): Promise<Projet[]> {
    const response = await fetch('http://localhost:8080/api/projets/');
    if (!response.ok) {
      throw new Error('Failed to fetch projets');
    }
    return await response.json()};
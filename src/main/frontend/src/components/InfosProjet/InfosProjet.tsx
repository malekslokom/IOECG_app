import './InfosProjet.css'


import projet from "../../assets/projet.png"

interface InfosProjetProps {
    project: {
        name: string,
        author: string,
        creationDate: string,
        version: string,
        description: string
      };
  }

const InfosProjet = ({ project }: InfosProjetProps) => {
  return (
 
    
      <div className="card-content">
        <div className="card-header">
          <h2>{project.name}</h2>
          <img src={projet} alt={project.name}  />
          
        </div>
        <hr/><br/>
        <p><strong>Auteur:</strong> {project.author}</p><br/>
        <p><strong>Date Création:</strong> 10/12/2023</p><br/>
        <p><strong>Version:</strong> {project.version}</p><br/>
        <strong>Description:</strong>
        <div className="project-description">
          {project.description}
        </div>
      </div>
    

  )
}

export default InfosProjet
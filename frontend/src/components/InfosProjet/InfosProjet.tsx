import React from 'react'
import './InfosProjet.css'
import { Card } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'

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
    <Card
      style={{ width: "30%", marginTop: 16 }}
      /*actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}*/
    >
      <div className="card-content">
        <div className="card-header">
          <h2 className="detail-title">{project.name}</h2>
          <img src={projet} alt={project.name} className="project-image" />
          
        </div>
        <hr/><br/>
        <p><strong className="detail-title">Auteur:</strong> {project.author}</p><br/>
        <p><strong  className="detail-title">Date Création:</strong> 10/12/2023</p><br/>
        <p><strong className="detail-title">Version:</strong> {project.version}</p><br/>
        <strong>Description:</strong>
        <div className="project-description">
          <div className="description-content">{project.description}</div>
        </div>
      </div>
    </Card>
  )
}

export default InfosProjet
import React from 'react'
import './AnalysesExperiencesProjet.css'
import { Table } from 'antd';

interface AnalysisListProps {
    title: string;
    data: {
      key: number;
      name: string;
      dateCreation: string;
      author: string;
    }[];
  }

const AnalysesExperiencesProjet = ({ title, data }: AnalysisListProps) => {
    const columns = [
        {
          title: 'Nom',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Date création',
          dataIndex: 'dateCreation',
          key: 'dateCreation',
        },
        {
          title: 'Auteur',
          dataIndex: 'author',
          key: 'author',
        },
      ];

  return (
    <div className='analyses'>
      <h4>{title}</h4>
      <Table dataSource={data} columns={columns} pagination={false} />
    </div>
  )
}

export default AnalysesExperiencesProjet
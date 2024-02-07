import React from 'react';
import './ListAnalyses.css'; // Assurez-vous d'avoir ce fichier CSS dans votre projet
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEye } from '@fortawesome/free-solid-svg-icons'; 


interface Analysis {
    creationDate: string;
    author: string;
    name: string;
    description: string;
}

interface ListAnalysesProps {
    analyses: Analyse[];
}

const ListAnalyses: React.FC<ListAnalysesProps> = ({ analyses }) => {
    return (
        <div className="list-analyses">
            <table>
                <thead>
                    <tr>
                        <th>Date de création</th>
                        <th>Auteur</th>
                        <th>Nom</th>
                        <th>Description</th>
                        <th></th>
                        <th></th>
                    </tr>

                </thead>
                <tbody>
                    {analyses.map((analysis, index) => (
                        <React.Fragment key={index}>
                            <tr>
                                <td>{analysis.dateCreation}</td>
                                <td>{analysis.author}</td>
                                <td>{analysis.name}</td>
                                <td>{analysis.description}</td>
                                <td>
                                    <button className="action-button">
                                    <FontAwesomeIcon icon={faTrash} /> {/* Icône de suppression */}
                                    </button>
                                </td>
                                <td>
                                    <button className="action-button">
                                    <FontAwesomeIcon icon={faEye} /> {/* Icône de visualisation */}
                                    </button>
                                </td>
                            </tr>
                            <tr><hr className="separator-row" /></tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListAnalyses;

import React from 'react'
import "./StatsAcceuil.css";

interface StatsAcceuilProps {
    icon: string; // URL de l'icône
    title: string; // Le texte à afficher, comme "Projets"
    count: number; // Le nombre total à afficher
  }

const StatsAcceuil = ({ icon, title, count }:StatsAcceuilProps) => {
  return (
  
    <div className="statsAcceuil">
      <div className="statsAcceuil-icon">
        <img src={icon} alt={title} />
      </div>
      <div className="statsAcceuil-content">
        <h3 className="statsAcceuil-title">{title}</h3>
        <div className="statsAcceuil-count">{count} total créé</div>
      </div>
    </div>
  );
}

export default StatsAcceuil
import React from 'react';
import { Target, MapPin, GraduationCap } from 'lucide-react';
import './Stats.css';

const Stats = () => {
  const stats = [
    {
      icon: <Target size={24} className="stat-icon" />,
      label: 'Target Audience',
      value: 'Startups & Businesses'
    },
    {
      icon: <MapPin size={24} className="stat-icon" />,
      label: 'Main HQ',
      value: 'Maharashtra, India'
    },
    {
      icon: <GraduationCap size={24} className="stat-icon" />,
      label: 'Specializing In',
      value: 'Student Academic Projects'
    }
  ];

  return (
    <div className="stats-bar">
      <div className="container stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-icon-wrapper">
              {stat.icon}
            </div>
            <div className="stat-text">
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}</span>
            </div>
            {index < stats.length - 1 && <div className="stat-divider"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;

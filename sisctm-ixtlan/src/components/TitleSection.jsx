import React from 'react';
import '../style/TitleSection.css';

const TitleSection = ({ title, subtitle }) => {
  return (
    <div className="title-section">
      <h1 className="title-section__title">{title}</h1>
      <p className="title-section__subtitle">{subtitle}</p>
      <div className="title-section__bar"></div>
    </div>
  );
};

export default TitleSection;

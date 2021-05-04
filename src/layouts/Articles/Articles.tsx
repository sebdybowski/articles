import React from 'react';
import './Articles.scss';

const Articles: React.FC = ({ children }) => (
  <div className="Articles" data-testid="Articles">
    {children}
  </div>
);

export default Articles;

import React from 'react';
import './FilterControls.scss';

const FilterControls: React.FC = ({ children }) => (
  <div className="FilterControls" data-testid="FilterControls">
    {children}
  </div>
);

export default FilterControls;

import React from 'react';
import './Layout.scss';

const Layout: React.FC = ({ children }) => (
  <div className="Layout" data-testid="Layout">
    {children}
  </div>
);

export default Layout;

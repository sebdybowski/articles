import React from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import './DateSorter.scss';

type DateSorterProps = {
  sortType: 'descending' | 'ascending';
};

const DateSorter: React.FC<DateSorterProps> = ({ children, sortType }) => (
  <div className="DateSorter" data-testid="DateSorter">
    <button type="button">
      {children}
      {sortType === 'ascending' ? <UpOutlined /> : <DownOutlined />}
    </button>
  </div>
);

export default DateSorter;

import React, { FC } from 'react';
import FilterControls from './layouts/FilterControls/FilterControls';
import Layout from './layouts/Layout/Layout';
import Articles from './layouts/Articles/Articles';
import CheckboxList from './components/CheckboxList/CheckboxList';
import SOURCES from './constants/sources';
import DateSorter from './components/DateSorter/DateSorter';

const App: FC = () => {
  return (
    <main>
      <Layout>
        <FilterControls>
          <CheckboxList
            options={SOURCES}
            values={[SOURCES[0]]}
            legend="Data sources"
          />
        </FilterControls>
        <Articles>
          <DateSorter sortType="descending">Sort by date</DateSorter>
        </Articles>
      </Layout>
    </main>
  );
};

export default App;

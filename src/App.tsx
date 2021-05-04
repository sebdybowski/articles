import React, { FC, useEffect, useState } from 'react';
import FilterControls from './layouts/FilterControls/FilterControls';
import Layout from './layouts/Layout/Layout';
import Articles from './layouts/Articles/Articles';
import CheckboxList from './components/CheckboxList/CheckboxList';
import DateSorter from './components/DateSorter/DateSorter';
import SOURCES from './constants/sources';
import SORT_TYPES from './constants/sortTypes';
import API_URLS from './constants/apiUrls';

const App: FC = () => {
  const [sortType, setSortType] = useState(SORT_TYPES.DESCENDING);
  // const [] = useState();
  // const [] = useState();

  useEffect(() => {
    (async function () {
      try {
        const fashionResponse = await fetch(API_URLS.FASHION);
        const sportsResponse = await fetch(API_URLS.SPORTS);

        console.log({
          fashionResponse,
          sportsResponse,
        });
      } catch (error) {
        console.log(error);
      } finally {
        console.log('finally');
      }
    })();
  }, []);
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
          <DateSorter sortType={sortType}>Sort by date</DateSorter>
        </Articles>
      </Layout>
    </main>
  );
};

export default App;

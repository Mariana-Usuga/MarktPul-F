import React from 'react';
import MainMarketGrid from '../../components/MainMarketGrid';
import FilterContainer from '../../components/FilterContainer';
import './Search.css';

const Search = () => (
  <div>
    <main>
      <FilterContainer />
      <MainMarketGrid />
    </main>
  </div>
);
export default Search;

import React from 'react';
import MainProductGrid from '../components/MainProductGrid';
import FilterContainer from '../components/FilterContainer';
import '../styles/components/search.scss';

const Search = () => (
  <div>
    <main>
      <FilterContainer />
      <MainProductGrid />
    </main>
  </div>
);
export default Search;

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/components/search.scss';
import MainProductGrid from '../components/MainProductGrid';
import FilterContainer from '../components/FilterContainer';

const Search = () => (
  <div>
    <Header />
    <main>
      <FilterContainer />
      <MainProductGrid />
    </main>
    <Footer />
  </div>
);
export default Search;

import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import MainProductGrid from '../components/MainProductGrid';
import FilterContainer from '../components/FilterContainer';
import '../styles/components/search.scss';

const Search = () => (
  <div>
    {/* <Header /> */}
    <main>
      <FilterContainer />
      <MainProductGrid />
    </main>
    {/* <Footer /> */}
  </div>
);
export default Search;

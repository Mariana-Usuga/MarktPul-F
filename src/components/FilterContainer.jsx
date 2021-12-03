import React, { useState } from 'react';
import '../styles/components/FilterContainer.scss';

const FilterContainer = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [showMarkets, setShowMarkets] = useState(false);
  const desplegar = (e) => {
    e.preventDefault();
    //     const lista = document.querySelectorAll('.sub-menu ul');
    if (e.target.text === 'Productos') {
      if (!showProducts) {
        setShowProducts(true);
      } else {
        setShowProducts(false);
      }
    }
    if (e.target.text === 'Mercados') {
      if (!showMarkets) {
        setShowMarkets(true);
      } else {
        setShowMarkets(false);
      }
    }
    if (e.target.text === 'Eventos') {
      if (!showEvents) {
        setShowEvents(true);
      } else {
        setShowEvents(false);
      }
    }
  };
  return (
    <div className="filter">
      <div className="filter__title">
        <span>Filtrar por</span>
      </div>
      <div className="filter__container">
        <ul className="slide">
          <li className="sub-menu ">
            <a href="/" className="sub-menu-list" onClick={desplegar}>
              Productos
            </a>
            <i className="fas fa-angle-down"> </i>
            <ul
              className={!showProducts ? 'sub_menu__ul' : 'sub_menu__ul--show'}
            >
              <li>
                <a href="/">Lorem Ipsum</a>
              </li>
              <li>
                <a href="/">Lorem Ipsum</a>
              </li>
              <li>
                <a href="/">Lorem Ipsum</a>
              </li>
            </ul>
          </li>
          <li className="sub-menu">
            <a href="/" className="sub-menu-list" onClick={desplegar}>
              Mercados
            </a>
            <i className="fas fa-angle-down"> </i>
            <ul
              className={!showMarkets ? 'sub_menu__ul' : 'sub_menu__ul--show'}
            >
              <li>
                <a href="/">Fisicos</a>
              </li>
              <li>
                <a href="/">Digitales</a>
              </li>
            </ul>
          </li>
          <li className="sub-menu">
            <a href="/" className="sub-menu-list" onClick={desplegar}>
              Eventos
              <i className="fas fa-angle-down" />
            </a>

            <ul className={!showEvents ? 'sub_menu__ul' : 'sub_menu__ul--show'}>
              <li>
                <a href="/">Lorem Ipsum</a>
              </li>
              <li>
                <a href="/">Lorem Ipsum</a>
              </li>
              <li>
                <a href="/">Lorem Ipsum</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default FilterContainer;

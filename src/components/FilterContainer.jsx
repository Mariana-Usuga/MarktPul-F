import React from 'react';
import '../styles/components/FilterContainer.scss';

const FilterContainer = () => {
  const desplegar = (e) => {
    e.preventDefault();
    const lista = document.querySelectorAll('.sub-menu ul');
    if (e.target.text === 'Productos') {
      lista[0].classList.toggle('sub_menu__ul');
    }
    if (e.target.text === 'Mercados') {
      lista[1].classList.toggle('sub_menu__ul');
    }
    if (e.target.text === 'Eventos') {
      lista[2].classList.toggle('sub_menu__ul');
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
            <ul className="sub_menu__ul">
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
            <ul className="sub_menu__ul">
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

            <ul className="sub_menu__ul">
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

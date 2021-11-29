import React from 'react';
import ProductItem from './ProductItem';
import '../styles/components/MainProductGrid.scss';

const MainProductGrid = () => {
  const data = [
    {
      id: 1,
      tipoMercado: 'Fisico',
      infoMercado: 'Loremipsumm',
      tagMercado: ['TAG1', 'TAG2', 'TAG2'],
      img: 'https://via.placeholder.com/220x172',
    },
    {
      id: 2,
      tipoMercado: 'Digital',
      infoMercado: 'Loremipsumm',
      tagMercado: ['TAG3', 'TAG4', 'TAG5'],
      img: 'https://via.placeholder.com/220x172',
    },
    {
      id: 3,
      tipoMercado: 'Fisico',
      infoMercado: 'Loremipsumm',
      tagMercado: ['TAG1', 'TAG2', 'TAG2'],
      img: 'https://via.placeholder.com/220x172',
    },
    {
      id: 4,
      tipoMercado: 'Digital',
      infoMercado: 'Loremipsumm',
      tagMercado: ['TAG3', 'TAG4', 'TAG5'],
      img: 'https://via.placeholder.com/220x172',
    },
    {
      id: 5,
      tipoMercado: 'Fisico',
      infoMercado: 'Loremipsumm',
      tagMercado: ['TAG1', 'TAG2', 'TAG2'],
      img: 'https://via.placeholder.com/220x172',
    },
    {
      id: 6,
      tipoMercado: 'Digital',
      infoMercado: 'Loremipsumm',
      tagMercado: ['TAG3', 'TAG4', 'TAG5'],
      img: 'https://via.placeholder.com/220x172',
    },
    {
      id: 7,
      tipoMercado: 'Fisico',
      infoMercado: 'Loremipsumm',
      tagMercado: ['TAG1', 'TAG2', 'TAG2'],
      img: 'https://via.placeholder.com/220x172',
    },
    {
      id: 8,
      tipoMercado: 'Digital',
      infoMercado: 'Loremipsumm',
      tagMercado: ['TAG3', 'TAG4', 'TAG5'],
      img: 'https://via.placeholder.com/220x172',
    },
    {
      id: 9,
      tipoMercado: 'Fisico',
      infoMercado: 'Loremipsumm',
      tagMercado: ['TAG1', 'TAG2', 'TAG2'],
      img: 'https://via.placeholder.com/220x172',
    },
    {
      id: 10,
      tipoMercado: 'Digital',
      infoMercado: 'Loremipsumm',
      tagMercado: ['TAG3', 'TAG4', 'TAG5'],
      img: 'https://via.placeholder.com/220x172',
    },
    {
      id: 11,
      tipoMercado: 'Fisico',
      infoMercado: 'Loremipsumm',
      tagMercado: ['TAG1', 'TAG2', 'TAG2'],
      img: 'https://via.placeholder.com/220x172',
    },
    {
      id: 12,
      tipoMercado: 'Digital',
      infoMercado: 'Loremipsumm',
      tagMercado: ['TAG3', 'TAG4', 'TAG5'],
      img: 'https://via.placeholder.com/220x172',
    },
    {
      id: 13,
      tipoMercado: 'Fisico',
      infoMercado: 'Loremipsumm',
      tagMercado: ['TAG1', 'TAG2', 'TAG2'],
      img: 'https://via.placeholder.com/220x172',
    },
    {
      id: 14,
      tipoMercado: 'Digital',
      infoMercado: 'Loremipsumm',
      tagMercado: ['TAG3', 'TAG4', 'TAG5'],
      img: 'https://via.placeholder.com/220x172',
    },
    {
      id: 15,
      tipoMercado: 'Fisico',
      infoMercado: 'Loremipsumm',
      tagMercado: ['TAG1', 'TAG2', 'TAG2'],
      img: 'https://via.placeholder.com/220x172',
    },
    {
      id: 16,
      tipoMercado: 'Digital',
      infoMercado: 'Loremipsumm',
      tagMercado: ['TAG3', 'TAG4', 'TAG5'],
      img: 'https://via.placeholder.com/220x172',
    },
    {
      id: 17,
      tipoMercado: 'Digital',
      infoMercado: 'Loremipsumm',
      tagMercado: ['TAG3', 'TAG4', 'TAG5'],
      img: 'https://via.placeholder.com/220x172',
    },
    {
      id: 18,
      tipoMercado: 'Fisico',
      infoMercado: 'Loremipsumm',
      tagMercado: ['TAG1', 'TAG2', 'TAG2'],
      img: 'https://via.placeholder.com/220x172',
    },
    {
      id: 19,
      tipoMercado: 'Digital',
      infoMercado: 'Loremipsumm',
      tagMercado: ['TAG3', 'TAG4', 'TAG5'],
      img: 'https://via.placeholder.com/220x172',
    },
    {
      id: 20,
      tipoMercado: 'Fisico',
      infoMercado: 'Loremipsumm',
      tagMercado: ['TAG1', 'TAG2', 'TAG2'],
      img: 'https://via.placeholder.com/220x172',
    },
    {
      id: 21,
      tipoMercado: 'Digital',
      infoMercado: 'Loremipsumm',
      tagMercado: ['TAG3', 'TAG4', 'TAG5'],
      img: 'https://via.placeholder.com/220x172',
    },
    {
      id: 22,
      tipoMercado: 'Fisico',
      infoMercado: 'Loremipsumm',
      tagMercado: ['TAG1', 'TAG2', 'TAG2'],
      img: 'https://via.placeholder.com/220x172',
    },
    {
      id: 23,
      tipoMercado: 'Digital',
      infoMercado: 'Loremipsumm',
      tagMercado: ['TAG3', 'TAG4', 'TAG5'],
      img: 'https://via.placeholder.com/220x172',
    },
    {
      id: 24,
      tipoMercado: 'Fisico',
      infoMercado: 'Loremipsumm',
      tagMercado: ['TAG1', 'TAG2', 'TAG2'],
      img: 'https://via.placeholder.com/220x172',
    },
    {
      id: 25,
      tipoMercado: 'Digital',
      infoMercado: 'Loremipsumm',
      tagMercado: ['TAG3', 'TAG4', 'TAG5'],
      img: 'https://via.placeholder.com/220x172',
    },
  ];
  return (
    <div className="container">
      {data.map((product) => {
        const { tipoMercado, infoMercado, tagMercado, img, id } = product;
        return (
          <ProductItem
            key={id}
            tipoMercado={tipoMercado}
            infoMercado={infoMercado}
            tagMercado={tagMercado}
            img={img}
          />
        );
      })}
    </div>
  );
};
export default MainProductGrid;

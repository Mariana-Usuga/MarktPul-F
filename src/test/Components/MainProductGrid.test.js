import React from 'react';
// import jest from '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import MainProductGrid from '../../components/MainProductGrid';
import { getMarkets } from '../../utils/landingPageServices';

describe('Pruebas en Main ProductGrid', () => {
  test('debe mostrar el componente correctamente ', () => {
    const wrapper = shallow(<MainProductGrid />);
    expect(wrapper).toMatchSnapshot();
  });
  test('debe traer 6 elementos', async () => {
    const testGetMarkets = await getMarkets();
    expect(testGetMarkets.data.length).toBe(6);
  });
  /* test('debe mostrar los markets cuando se cargan', () => {
    const testMarkets = [
      {
        _id: '61d9a7393b950197f5fde04c',
        title: 'Mercado de Mariana Usuga',
        description: 'Vende tus productos en el mejor mercado de la ciudad',
        organizer: 'Mariana Usuga Montoya',
        image:
          'https://res.cloudinary.com/db3njhxi0/image/upload/v1639700587/Markt-Pul/Markets/mercadoPorDefecto_aukqrf.jpg',
        __v: 0,
        place: 'Cr 59 # 235-61',
      },
    ];
    getMarkets.mockReturnValue({
      data: testMarkets,
    });
    const wrapper = shallow(<MainProductGrid />);
    expect(wrapper).toMatchSnapshot();
  }); */
});

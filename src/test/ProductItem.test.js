import React from 'react';
import { shallow } from 'enzyme';
import ProductItem from '../components/ProductItem';

describe(' Pruebas en ProductItem', () => {
  const place = 'direccion de prueba';
  const description = 'descripcion de prueba';
  const image = 'http:/localhost/prueba.jpg';
  const title = 'titulo de prueba';
  const wrapper = shallow(
    <ProductItem
      place={place}
      description={description}
      image={image}
      title={title}
    />,
  );
  test('debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('debe validar las props enviadas en el componente', () => {
    const testPlace = wrapper.find('.card-place');
    const testDescription = wrapper.find('.card-description');
    const testTitle = wrapper.find('.card-title');
    expect(testTitle.text().trim()).toBe(title);
    expect(testPlace.text().trim()).toBe(place);
    expect(testDescription.text().trim()).toBe(description);
  });
  test('debe tener la imagen igual al url y alt a los props', () => {
    const testImage = wrapper.find('img');
    expect(testImage.prop('src')).toBe(image);
    expect(testImage.prop('alt')).toBe(title);
  });
  test('debe tener la clse card-product', () => {
    const div = wrapper.find('.card-product');
    // card-product
    const className = div.prop('className');
    expect(className.includes('card-product')).toBe(true);
  });
});

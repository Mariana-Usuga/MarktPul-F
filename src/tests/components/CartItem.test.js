import { render } from '@testing-library/react';
import CartItem from '../../components/CartItem';
import '@testing-library/jest-dom';

test('Imagenes en Carrito compras', () => {
  const arrayMock = {
    src: 'image',
    producto: 'title',
    cantidad: 1,
    precioUnitario: 22,
  };
  const ren = render(
    <CartItem
      src={arrayMock.src}
      producto={arrayMock.producto}
      cantidad={arrayMock.cantidad}
      precioUnitario={arrayMock.precioUnitario}
    />,
  );
  const img = ren.getAllByRole('img');
  img.forEach((image) => {
    expect(image).toBeVisible();
  });
});

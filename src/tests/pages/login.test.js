import { render, fireEvent } from '@testing-library/react';
import Login from '../../pages/Login';

test('Login form button', () => {
  const login = render(<Login />);
  const buttonInput = login.getByDisplayValue('Iniciar Sesión');
  expect(buttonInput).toBeInTheDocument();
});
test('Checkbox onchange State', () => {
  const login = render(<Login />);
  const checkbox = login.getByRole('checkbox', { name: /Mostrar/i });
  expect(checkbox.checked).toEqual(false);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
});

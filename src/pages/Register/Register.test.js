import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Register from '.';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

const setupInputElements = () => {
  const result = render(<Register />);
  const inputElements = result.container.getElementsByTagName('input');
  return inputElements;
};

describe('Register form rendering', () => {
  test('Should render a lateral image', () => {
    render(<Register />);
    const registerImage = screen.getByAltText('Flea Market');
    expect(registerImage).toHaveAttribute('alt', 'Flea Market');
  });
  test('should render an email input ', () => {
    const FormInputElements = setupInputElements();
    const emailInputElement = FormInputElements.namedItem('email');
    expect(emailInputElement).toBeInTheDocument();
  });
  test('should render a password input ', () => {
    const FormInputElements = setupInputElements();
    const passwordInputElement = FormInputElements.namedItem('password');
    expect(passwordInputElement).toBeInTheDocument();
  });
  test('should render an username input ', () => {
    const FormInputElements = setupInputElements();
    const usernameInputElement = FormInputElements.namedItem('username');
    expect(usernameInputElement).toBeInTheDocument();
  });
  test('should render only one form submit button ', () => {
    const result = render(<Register />);
    const searchInputElement =
      result.container.getElementsByClassName('register__button');
    expect(searchInputElement.length).toBe(1);
  });
  test('should render login social google', () => {
    const result = render(<Register />);
    const searchInputElement = result.container.getElementsByClassName(
      'login__form--google',
    );
    expect(searchInputElement.length).toBe(1);
  });
  test('should render login social facebook', () => {
    const result = render(<Register />);
    const searchInputElement = result.container.getElementsByClassName(
      'login__form--facebook',
    );
    expect(searchInputElement.length).toBe(1);
  });
});

describe('Register inputs validation', () => {
  test('valid email to input', () => {
    render(<Register />);
    const emailElement = screen.getByTestId('email-input');
    userEvent.type(emailElement, 'valid@email.com');

    expect(screen.getByTestId('email-input')).toHaveValue('valid@email.com');
    expect(screen.queryByTestId('error-email')).not.toBeInTheDocument();
  });
  test('invalid email to input', () => {
    render(<Register />);
    const emailElement = screen.getByTestId('email-input');
    userEvent.type(emailElement, 'invalid@email');

    expect(screen.getByTestId('email-input')).toHaveValue('invalid@email');
    expect(screen.queryByTestId('error-email')).toBeInTheDocument();
  });
  test('valid password to input', () => {
    render(<Register />);
    const passwordElement = screen.getByTestId('password-input');
    userEvent.type(passwordElement, '123456josecarlos');

    expect(screen.getByTestId('password-input')).toHaveValue(
      '123456josecarlos',
    );
    expect(screen.queryByTestId('error-password')).not.toBeInTheDocument();
  });
  test('invalid password to input', () => {
    render(<Register />);
    const passwordElement = screen.getByTestId('password-input');
    userEvent.type(passwordElement, '123');

    expect(screen.getByTestId('password-input')).toHaveValue('123');
    expect(screen.queryByTestId('error-password')).toBeInTheDocument();
  });
  test('valid confirm password to input', () => {
    render(<Register />);
    const passwordElement = screen.getByTestId('password-input');
    const rePasswordElement = screen.getByTestId('repassword-input');

    userEvent.type(passwordElement, '123456josecarlos');
    expect(screen.getByTestId('password-input')).toHaveValue(
      '123456josecarlos',
    );

    userEvent.type(rePasswordElement, '123456josecarlos');
    expect(screen.getByTestId('repassword-input')).toHaveValue(
      '123456josecarlos',
    );

    expect(screen.queryByTestId('error-repassword')).not.toBeInTheDocument();
  });
  test('invalid confirm password to input', () => {
    render(<Register />);
    const passwordElement = screen.getByTestId('password-input');
    const rePasswordElement = screen.getByTestId('repassword-input');

    userEvent.type(passwordElement, '123456josecarlos');
    expect(screen.getByTestId('password-input')).toHaveValue(
      '123456josecarlos',
    );

    userEvent.type(rePasswordElement, '123456');
    expect(screen.getByTestId('repassword-input')).toHaveValue('123456');

    expect(screen.queryByTestId('error-repassword')).toBeInTheDocument();
  });
});

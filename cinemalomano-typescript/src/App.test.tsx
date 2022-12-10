import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('./lib/request.ts')

test('renders learn react link', () => {
  
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  render(<App />);
    // const btnLogin = screen.getByRole("button", { name: "details" });
    // expect(btnLogin).toBeInTheDocument();
  });

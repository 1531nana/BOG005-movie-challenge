import { render, waitFor } from '@testing-library/react';
import App from './App';

jest.mock('./lib/request.ts')


test('The App component renders its first load in the root index', async () => {
  
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), 
      removeListener: jest.fn(), 
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  render(<App />);

  await waitFor(() => 
  expect(window.location.pathname).toEqual('/')
  )
  });

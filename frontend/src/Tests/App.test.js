import { render, screen } from '@testing-library/react';
import App from '../Components/App';

// Test checking if logo is rendered on the website
test('renders website logo', () => {
  render(<App />);
  const logo = screen.getByText(/CoDaily/i);
  expect(logo).toBeInTheDocument();
});

// Test checking if copyright info is rendered on the website
test('renders copyright in the footer', () => {
  render(<App />);
  const copyright = screen.getByText(/Copyright/i);
  expect(copyright).toBeInTheDocument();
});



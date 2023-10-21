import { render, screen } from '@testing-library/react';
import {Header } from "./components/sections/Header"

test('Header', () => {
  render(<Header />);
  const headingElement = screen.getByText("Little Lemon");
  expect(headingElement).toBeInTheDocument();
})
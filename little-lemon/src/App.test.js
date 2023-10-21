import { render, screen } from '@testing-library/react';
import Confirmation from './components/sections/Confirmation';

test('renders confirmation message and image', () => {
render(<Confirmation />);

  // Check if the confirmation message is rendered
  const confirmationMessage =screen.getByText('Your reservation is Confirmed!');
  expect(confirmationMessage).toBeInTheDocument();

  // Check if the image is rendered with the correct alt text
  const image = screen.getByAltText('');
  expect(image).toBeInTheDocument();
});

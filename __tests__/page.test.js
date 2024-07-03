import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home', () => {
  it('renders the Home component with all subcomponents', () => {
    render(<Home />);

    // Check if ToastContainer is rendered
    const toastContainer = document.querySelector('.Toastify');
    expect(toastContainer).toBeInTheDocument(); // Assuming .Toastify is the class used

    // Check if Header is rendered
    expect(screen.getByTestId('header')).toBeInTheDocument();

    // Check if BlogList is rendered
    expect(screen.getByTestId('blog-list')).toBeInTheDocument();

    // Check if Footer is rendered
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});

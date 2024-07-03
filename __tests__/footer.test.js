import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '@/Components/Footer';

describe('Footer Component', () => {
  it('renders copyright text correctly', () => {
    render(<Footer />);

    // Assert presence of elements
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByText('ThinkBlogs')).toBeInTheDocument();

    // Assert copyright text content
    const copyrightText =
      'Ⓒ All right reserved. Copyrights Reserved @ThinkBlogs';
    expect(screen.getByText(copyrightText)).toBeInTheDocument();

     // Assert presence of social media icons by their alt text
     expect(screen.getByAltText('facebook icon')).toBeInTheDocument();
     expect(screen.getByAltText('twitter icon')).toBeInTheDocument();
     expect(screen.getByAltText('googleplus icon')).toBeInTheDocument();
  });
});

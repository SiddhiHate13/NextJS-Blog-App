import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '@/Components/ui/button'; // Adjust the path as per your project structure

describe('Button Component', () => {
  it('renders with default variant and size', () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole('button');

    // Assert presence of the button element
    expect(button).toBeInTheDocument();

    // Assert default classes based on default variants
    expect(button).toHaveClass('bg-primary text-primary-foreground hover:bg-primary/90');
    expect(button).toHaveClass('h-10 px-4 py-2'); // Default size

    // Optionally, you can check the text content
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders with specific variant and size', () => {
    render(<Button variant="outline" size="lg">Submit</Button>);

    const button = screen.getByRole('button');

    // Assert presence of the button element
    expect(button).toBeInTheDocument();

    // Assert classes based on specified variant and size
    expect(button).toHaveClass('border border-input bg-background hover:bg-accent hover:text-accent-foreground');
    expect(button).toHaveClass('h-11 rounded-md px-8'); // Large size

    // Optionally, you can check the text content
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
});

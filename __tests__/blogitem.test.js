import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogItem from '@/Components/BlogItem';

jest.mock('next/image', () => {
    const Image = () => <Image alt="Blog Image" />;
    Image.displayName = 'NextImageMock';
    return Image;
  });

describe('BlogItem Component', () => {
  const mockBlog = {
    title: 'Sample Blog Title',
    description: 'Sample blog description.',
    category: 'Technology',
    id: '1',
  };

  it('renders blog item correctly', () => {
    render(
      <BlogItem
        title={mockBlog.title}
        description={mockBlog.description}
        category={mockBlog.category}
        image="/path/to/image.jpg" // Replace with a placeholder or a string for image path
        id={mockBlog.id}
      />
    );

    // Assert presence of elements
    expect(screen.getByText(mockBlog.title)).toBeInTheDocument();
    expect(screen.getByText(mockBlog.description)).toBeInTheDocument();
    expect(screen.getByText(mockBlog.category)).toBeInTheDocument();
    expect(screen.getByAltText('Blog Image')).toBeInTheDocument(); // Ensure alt text matches your implementation
    expect(screen.getByText('Read more')).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Sidebar from '@/Components/AdminComponents/Sidebar';

describe('Sidebar Component', () => {
  it('renders sidebar elements correctly', () => {
    render(<Sidebar />);

    // Assert presence of elements
    expect(screen.getByText('ThinkBlogs')).toBeInTheDocument();
    expect(screen.getByText('Add blogs')).toBeInTheDocument();
    expect(screen.getByText('Blog lists')).toBeInTheDocument();
    expect(screen.getByText('Subscriptions')).toBeInTheDocument();
  });

  it('renders links with correct href attributes', () => {
    render(<Sidebar />);

    // Assert href attributes of links
    expect(screen.getByText('Add blogs').closest('a')).toHaveAttribute('href', '/admin/addBlog');
    expect(screen.getByText('Blog lists').closest('a')).toHaveAttribute('href', '/admin/blogList');
    expect(screen.getByText('Subscriptions').closest('a')).toHaveAttribute('href', '/admin/subscriptions');
  });
});


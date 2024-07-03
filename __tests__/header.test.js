import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import Header from '@/Components/Header';
import { toast } from 'react-toastify';

jest.mock('axios'); // Mock axios module
jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe('Header Component', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Reset mock function call counts before each test
  });

  it('renders header elements correctly', () => {
    render(<Header />);

    // Assert presence of elements
    expect(screen.getByText('Hello, You.')).toBeInTheDocument();
    expect(screen.getByText(/Step into the world of ThinkBlogs/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(screen.getByText('Subscribe')).toBeInTheDocument();
  });

  it('updates email input value correctly', () => {
    render(<Header />);

    const emailInput = screen.getByPlaceholderText('Enter your email');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    expect(emailInput.value).toBe('test@example.com');
  });

  it('submits the form successfully', async () => {
    axios.post.mockResolvedValue({ data: { success: true, msg: 'Subscribed successfully!' } });

    render(<Header />);

    const emailInput = screen.getByPlaceholderText('Enter your email');
    const submitButton = screen.getByText('Subscribe');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith('Subscribed successfully!');
      expect(emailInput.value).toBe('');
    });
  });

  it('handles form submission error', async () => {
    axios.post.mockResolvedValue({ data: { success: false } });

    render(<Header />);

    const emailInput = screen.getByPlaceholderText('Enter your email');
    const submitButton = screen.getByText('Subscribe');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Error');
      expect(emailInput.value).toBe('test@example.com');
    });
  });
});

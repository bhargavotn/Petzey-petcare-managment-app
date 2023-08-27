import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import Department from './Department';

jest.mock('axios');

describe('Department component', () => {
  beforeEach(() => {
    // Mock the axios.delete function
    axios.delete.mockResolvedValue({ status: 200, data: {} });
  });

  afterEach(() => {
    // Clear all mocks after each test case
    jest.clearAllMocks();
  });

  test('renders department data', async () => {
    const mockData = [
      { departmentId: 1, departmentName: 'Department 1', status: true },
      { departmentId: 2, departmentName: 'Department 2', status: false },
    ];

    // Mock the axios.get function to return the mock data
    axios.get.mockResolvedValue({ data: mockData });

    render(<Department />);

    // Wait for the department data to be rendered
    await waitFor(() => {
      const department1 = screen.getByText('Department 1');
      const department2 = screen.getByText('Department 2');
      expect(department1).toBeInTheDocument();
      expect(department2).toBeInTheDocument();
    });
  });

  test('deletes a department', async () => {
    const mockData = [
      { departmentId: 1, departmentName: 'Department 1', status: true },
    ];

    // Mock the axios.get function to return the mock data
    axios.get.mockResolvedValue({ data: mockData });

    render(<Department />);

    // Wait for the department data to be rendered
    await waitFor(() => {
      const deleteButton = screen.getByText('Delete');
      fireEvent.click(deleteButton);
    });

    // Wait for the delete confirmation modal to be rendered
    await waitFor(() => {
      const deleteModal = screen.getByText('Are you sure you want to delete this Department?');
      expect(deleteModal).toBeInTheDocument();
    });

    // Simulate deletion by clicking the delete button in the modal
    const deleteConfirmationButton = screen.getByText('Delete');
    fireEvent.click(deleteConfirmationButton);

    // Wait for the department data to be updated after deletion
    await waitFor(() => {
      const department1 = screen.queryByText('Department 1');
      expect(department1).not.toBeInTheDocument();
    });

    // Verify that axios.delete was called with the correct URL and department ID
    expect(axios.delete).toHaveBeenCalledWith(
      'https://departmentservice.dev.skillassure.com/department/petzeydepartment/department/delete/1'
    );
  });
});

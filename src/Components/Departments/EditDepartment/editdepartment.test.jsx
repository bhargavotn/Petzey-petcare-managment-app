import { render, screen } from '@testing-library/react';


import EditDepartment from './EditDepartment';

test('The departmentName should be rendered', () => {

  render(<EditDepartment />);

  const linkElement = screen.getByTestId(/departmentName/i);

  expect(linkElement).toBeInTheDocument('');

});
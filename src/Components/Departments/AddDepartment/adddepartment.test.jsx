import { render, screen } from '@testing-library/react';

import AddDepartment from './AddDepartment';

test('The departmentName should be rendered', () => {

  render(<AddDepartment />);

  const linkElement = screen.getByTestId(/departmentName/i);

  expect(linkElement).toBeInTheDocument('');

});
import { vi } from 'vitest';

import { render, screen, fireEvent } from '@testing-library/react';
import ZipForm from '../ZipForm';

describe('ZipForm', () => {
  it('calls onSearch when submitted with valid input', () => {
    const mockSearch = vi.fn();
    const mockSetZip = vi.fn();

    render(<ZipForm onSearch={mockSearch} zip="1000001" setZip={mockSetZip} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockSearch).toHaveBeenCalled();
  });
});

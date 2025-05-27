import { vi } from 'vitest';

import { render, screen, fireEvent } from '@testing-library/react';
import ZipForm from '../ZipForm';

describe('ZipForm', () => {
  it('calls onSearch with input value when submitted', () => {
    const mockSearch = vi.fn();
    const mockSetZip = vi.fn();

    render(<ZipForm onSearch={mockSearch} zip="1000001" setZip={mockSetZip} />);

    const input = screen.getByPlaceholderText(/郵便番号/);
    fireEvent.change(input, { target: { value: '1000001' } });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockSearch).toHaveBeenCalledWith('1000001');
  });
});

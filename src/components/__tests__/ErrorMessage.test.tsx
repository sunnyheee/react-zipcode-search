import { render, screen } from '@testing-library/react';
import ErrorMessage from '../ErrorMessage';

describe('ErrorMessage', () => {
  it('renders the error message', () => {
    render(<ErrorMessage message="郵便番号は必須です" />);
    expect(screen.getByText('郵便番号は必須です')).toBeInTheDocument();
  });
});

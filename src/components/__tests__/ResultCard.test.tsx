// src/components/__tests__/ResultCard.test.tsx
import { render, screen } from '@testing-library/react';
import ResultCard from '../ResultCard';

const mockData = [
  {
    zipcode: '1000001',
    address1: '東京都',
    address2: '千代田区',
    address3: '千代田',
    kana1: 'トウキョウト',
    kana2: 'チヨダク',
    kana3: 'チヨダ',
  },
];

describe('ResultCard', () => {
  it('renders full address and kana', () => {
    render(<ResultCard data={mockData} />);

    expect(screen.getByText(/東京都千代田区千代田/)).toBeInTheDocument();
    expect(screen.getByText(/トウキョウト チヨダク チヨダ/)).toBeInTheDocument();
    expect(screen.getByText(/郵便番号: 1000001/)).toBeInTheDocument();
  });
});

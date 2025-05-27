import { useState } from 'react';
import { validateZip } from '../utils/validateZip';

type ZipData = {
  zipcode: string;
  address1: string;
  address2: string;
  address3: string;
  kana1: string;
  kana2: string;
  kana3: string;
};

export function useZipSearch() {
  const [zip, setZip] = useState('');
  const [results, setResults] = useState<ZipData[]>([]);
  const [error, setError] = useState('');
  const [history, setHistory] = useState<ZipData[][]>([]);
  const [touched, setTouched] = useState(false);

  const handleSearch = async () => {
    setTouched(true);
    setError('');

    const validationError = validateZip(zip);
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const res = await fetch(
        `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zip.replace('-', '')}`,
      );
      const data = await res.json();

      if (data.status !== 200) {
        setError(data.message || 'エラーが発生しました。');
        return;
      }

      if (!data.results || data.results.length === 0) {
        setError('郵便番号が存在しません。');
        return;
      }

      const fetchedResults: ZipData[] = data.results.map((r: ZipData) => ({
        zipcode: r.zipcode,
        address1: r.address1,
        address2: r.address2,
        address3: r.address3,
        kana1: r.kana1,
        kana2: r.kana2,
        kana3: r.kana3,
      }));

      setResults(fetchedResults);
      setHistory((prev) => [fetchedResults, ...prev.slice(0, 9)]);
      setZip('');
      setTouched(false);
    } catch (err) {
      setError('エラーが発生しました。');
    }
  };
  const handleZipChange = (value: string) => {
    setZip(value);
    if (error) setError('');
    if (!touched) setTouched(true);
  };
  return {
    zip,
    setZip: handleZipChange,
    results,
    error,
    history,
    handleSearch,
  };
}

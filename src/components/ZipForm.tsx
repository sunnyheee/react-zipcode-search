import { type FormEvent, type ChangeEvent, useState } from 'react';
import '../styles/zip-form.scss';
import { validateZip } from '../utils/validateZip';
import ErrorMessage from './ErrorMessage';

type Props = {
  zip: string;
  setZip: (val: string) => void;
  onSearch: (zip: string) => void;
};

function ZipForm({ zip, setZip, onSearch }: Props) {
  const [touched, setTouched] = useState(false);
  const error = validateZip(zip);
  const showError = touched && error;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setZip(e.target.value);
    if (!touched) setTouched(true);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!error) onSearch(zip);
  };

  return (
    <form onSubmit={handleSubmit} className="zip-form">
      <div className="input-area">
        <input
          type="text"
          value={zip}
          onChange={handleChange}
          placeholder="郵便番号を入力してください。"
          maxLength={8}
        />
        <button type="submit" disabled={!!error}>
          検索
        </button>
      </div>
      {showError && <ErrorMessage message={error} />}
    </form>
  );
}

export default ZipForm;

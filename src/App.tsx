import ErrorMessage from './components/ErrorMessage';
import HistoryList from './components/HistoryList';
import HistoryListSlide from './components/HistoryListSlide';
import ResultCard from './components/ResultCard';
import ZipForm from './components/ZipForm';
import { useZipSearch } from './hooks/useZipSearch';
import './styles/main.scss';

function App() {
  const { zip, setZip, results, error, handleSearch, history } = useZipSearch();

  return (
    <main className="main inner">
      <h1 className="title">住所検索</h1>
      <p className="description">
        郵便番号を入力して住所を検索できます。
        <br />
        郵便番号はハイフン「-」有無どちらでも検索可能です。
        <br />
        (000-0000、0000000 の形式で入力してください。)
      </p>
      <ZipForm zip={zip} setZip={setZip} onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {results.length > 0 && (
        <article className="result-area">
          <ResultCard data={results} />
        </article>
      )}
      {/* カードリスト */}
      {history.length > 0 && <HistoryList history={history} />}
      {/* スライドリスト */}
      {history.length > 0 && <HistoryListSlide history={history} />}
    </main>
  );
}

export default App;

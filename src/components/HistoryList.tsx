import HistoryCard from './HistoryCard';
import '../styles/historylist.scss';

type Address = {
  zipcode: string;
  address1: string;
  address2: string;
  address3: string;
  kana1: string;
  kana2: string;
  kana3: string;
};

type Props = {
  history: Address[][];
};

function HistoryList({ history }: Props) {
  return (
    <div className="history-list">
      <h2>検索履歴</h2>
      <div className="history-grid">
        {history.map((resultGroup, index) => (
          <div key={index} className="history-item">
            <HistoryCard data={resultGroup} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryList;

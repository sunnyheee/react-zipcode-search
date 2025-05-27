import '../styles/historycard.scss';

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
  data: Address[];
};

function HistoryCard({ data }: Props) {
  if (data.length === 0) return null;

  const { zipcode } = data[0];

  return (
    <div className="history-card">
      <p className="zipcode">郵便番号: {zipcode}</p>
      {data.map((item, i) => (
        <div key={i} className="address-block">
          <p>
            住所: {item.address1}
            {item.address2}
            {item.address3}
          </p>
          <p>
            カナ: {item.kana1} {item.kana2} {item.kana3}
          </p>
        </div>
      ))}
    </div>
  );
}

export default HistoryCard;

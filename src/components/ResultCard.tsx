import '../styles/resultcard.scss';

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

function ResultCard({ data }: Props) {
  if (data.length === 0) return null;

  const { zipcode } = data[0];

  return (
    <div className="result-card">
      <p className="zipcode">
        <span>郵便番号</span> {zipcode}
      </p>
      {data.map((item, i) => (
        <div key={i} className="address-block">
          <p className="address">
            <span>住所</span>
            {item.address1}
            {item.address2}
            {item.address3}
          </p>
          <p className="kana">
            <span>カナ</span>
            {item.kana1} {item.kana2} {item.kana3}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ResultCard;

import '../styles/error-message.scss';

type Props = {
  message: string;
};

function ErrorMessage({ message }: Props) {
  if (!message) return null;

  return <p className="error-message">{message}</p>;
}

export default ErrorMessage;

interface ErrorMessageProps {
  message: string | null;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return <span>{message}</span>;
}

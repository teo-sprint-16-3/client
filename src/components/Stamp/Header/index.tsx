import { useNavigate } from "react-router-dom";
import Back from "../../../assets/icons/back.svg";
import styles from "./index.module.scss";

interface IProps {
  title: string;
}

export default function Header({ title }: IProps) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className={styles.header}>
      <img src={Back} alt="back" className={styles.back} onClick={goBack} />
      <div className={styles.title}>{title}</div>
    </div>
  );
}

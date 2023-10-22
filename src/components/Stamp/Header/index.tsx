import { useNavigate } from "react-router-dom";
import Back from "../../../assets/icons/back.svg";
import styles from "./index.module.scss";

export default function Header() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className={styles.header}>
      <img src={Back} alt="back" className={styles.back} onClick={goBack} />
      <div className={styles.title}>여행 국가</div>
    </div>
  );
}

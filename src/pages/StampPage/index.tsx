import Header from "../../components/Stamp/Header";
import Stamp from "../../components/Stamp";

import styles from "./index.module.scss";

const StampPage = () => {
  return (
    <div className={styles.container}>
      <Header title="여행 국가" />
      <Stamp />
    </div>
  );
};

export default StampPage;

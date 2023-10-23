import { useEffect } from "react";

import styles from "./index.module.scss";
import defaultFlag from "../../assets/countryFlags/other.svg";
interface StampProps {
  flag: string;
  name: string;
}

export default function Sample() {
  const stampList: StampProps[] = [
    { flag: "South Korea.svg", name: "한국" },
    { flag: "China.svg", name: "중국" },
    { flag: "United States.svg", name: "미국" },
    { flag: "Japan.svg", name: "일본" },
    { flag: "Taiwan.svg", name: "대만" },
    { flag: "Philippines.svg", name: "필리핀" },
  ];
  function getImageUrl(flagName: string) {
    return new URL(`../../assets/countryFlags/${flagName}`, import.meta.url)
      .href;
  }
  return (
    <div className={styles.container}>
      {stampList.length ? (
        <div className={styles.stamp}>
          {stampList.map(({ flag, name }) => {
            return (
              <div className={styles.stampBox}>
                <img
                  src={
                    getImageUrl(flag).split("/").reverse()[0] !== "undefined"
                      ? getImageUrl(flag)
                      : defaultFlag
                  }
                  alt={name}
                  className={styles.flag}
                />
                <div className={styles.nameBox}>{name}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.noStamp}> 획득한 스템프가 없습니다. </div>
      )}
    </div>
  );
}

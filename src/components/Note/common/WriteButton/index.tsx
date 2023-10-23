import CircleButton from "../../../../assets/icons/circle.svg";
import WriteIcon from "../../../../assets/icons/write.svg";

import s from "./index.module.scss";

export function WriteButton() {
  return (
    <div className={s.container}>
      <img src={CircleButton} alt="쓰기 버튼" />
      <div className={s.wrapper}>
        <img src={WriteIcon} alt="쓰기 아이콘" />
        <div className={s.text}>쓰기</div>
      </div>
    </div>
  );
}

import CircleButton from "../../../../assets/icons/circle.svg";
import s from "./index.module.scss";

export function WriteButton() {
  return (
    <div className={s.container}>
      <button>
        <img src={CircleButton} alt="글쓰기 버튼" />
        <div className={s.text}>쓰기</div>
      </button>
    </div>
  );
}

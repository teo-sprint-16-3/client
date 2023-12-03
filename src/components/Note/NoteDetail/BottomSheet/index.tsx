import closeButton from "../../../../assets/icons/close.svg";

import s from "./index.module.scss";

interface Props {
  onClose: () => void;
}

export const BottomSheet = ({ onClose }: Props) => {
  return (
    <div>
      <div className={s.background}></div>
      <div className={s.bottomSheet}>
        <div className={s.closeButtonWrapper}>
          <button className={s.closeButton} onClick={onClose}>
            <img src={closeButton} alt="닫기 버튼" />
          </button>
        </div>
        <button className={s.menuButton}>페이지 수정</button>
        <button className={s.menuButton}>페이지 삭제</button>
      </div>
    </div>
  );
};

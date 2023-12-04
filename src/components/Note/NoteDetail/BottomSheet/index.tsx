import { createPortal } from "react-dom";

import closeButton from "../../../../assets/icons/close.svg";

import s from "./index.module.scss";

interface Props {
  onClose: () => void;
  onDelete: () => void;
}

export const BottomSheet = ({ onClose, onDelete }: Props) => {
  const handleEditPage = () => {
    // TODO: 노트 수정 페이지로 이동
    // 아래는 임시
    console.log("페이지 수정 화면으로 이동");
  };

  const handleDeletePage = () => {
    onDelete();
  };

  const bottomSheetRoot = document.querySelector("#bottom-sheet-root");

  return createPortal(
    <div>
      <div className={s.background} onClick={onClose}></div>
      <div className={s.bottomSheet}>
        <div className={s.closeButtonWrapper}>
          <button className={s.closeButton} onClick={onClose}>
            <img src={closeButton} alt="닫기 버튼" />
          </button>
        </div>
        <button className={s.menuButton} onClick={handleEditPage}>
          페이지 수정
        </button>
        <button className={s.menuButton} onClick={handleDeletePage}>
          페이지 삭제
        </button>
      </div>
    </div>,
    bottomSheetRoot as Element,
  );
};

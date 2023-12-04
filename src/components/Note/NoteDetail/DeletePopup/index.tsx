import s from "./index.module.scss";

interface Props {
  onClose: () => void;
  onDelete: () => void;
}

export const DeletePopup = ({ onClose, onDelete }: Props) => {
  return (
    <div>
      <div className={s.background}></div>
      <div className={s.deletePopup}>
        <div className={s.messageWrapper}>
          <div className={s.message}>페이지 삭제</div>
          <div className={s.subMessage}>페이지를 삭제할게요</div>
        </div>
        <div className={s.buttonWrapper}>
          <button className={s.cancelButton} onClick={onClose}>
            취소
          </button>
          <button className={s.deleteButton} onClick={onDelete}>
            삭제하기
          </button>
        </div>
      </div>
    </div>
  );
};

import s from "./index.module.scss";
import CloseIcon from "../../../../assets/icons/close.svg";

interface Props {
  title: string;
  onClose: () => void;
  onSave: () => void;
  children: React.ReactNode;
}

export default function BottomSheet({
  title,
  onClose,
  onSave,
  children,
}: Props) {
  return (
    <>
      <div className={s.overlay}></div>
      <div className={s.bottomSheetConatiner}>
        <div className={s.bottomSheetContent}>
          <header className={s.bottomSheetHeader}>
            <h2>{title}</h2>
            <button type="button" onClick={onClose}>
              <img src={CloseIcon} alt="닫기" />
            </button>
          </header>
          <div className={s.bottomSheetBody}>{children}</div>
        </div>
        <div className={s.bottomSheetFooter}>
          <button
            type="button"
            onClick={onSave}
            className={s.bottomSheetSaveButton}
          >
            저장
          </button>
        </div>
      </div>
    </>
  );
}

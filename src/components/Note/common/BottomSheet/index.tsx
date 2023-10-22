import s from "./index.module.scss";

interface Props {
  title: string;
  onClose: () => void;
  children: any;
}

export default function BottomSheet({ title, onClose, children }: Props) {
  return (
    <div className={s.bottomSheetConatiner}>
      <div className={s.bottomSheetContent}>
        <header className={s.bottomSheetHeader}>
          <h2>{title}</h2>
          <button onClick={onClose}>닫기</button>
        </header>
        <div className={s.bottomSheetBody}>{children}</div>
      </div>
      <div className={s.bottomSheetFooter}>
        <button className={s.bottomSheetSaveButton}>저장</button>
      </div>
    </div>
  );
}

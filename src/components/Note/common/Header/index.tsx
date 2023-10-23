import s from "./index.module.scss";
import CloseIcon from "../../../../assets/icons/close.svg";

interface IProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ setOpenModal }: IProps) {
  const handleClickCloseBtn = () => {
    setOpenModal(false);
  };

  return (
    <div className={s.header}>
      <h2>쓰기</h2>
      <button onClick={handleClickCloseBtn}>
        <img src={CloseIcon} alt="닫기" />
      </button>
    </div>
  );
}

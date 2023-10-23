import CircleButton from "../../../../assets/icons/circle.svg";
import WriteIcon from "../../../../assets/icons/write.svg";

import s from "./index.module.scss";

interface IProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function WriteButton({ openModal, setOpenModal }: IProps) {
  const handleClick = () => {
    setOpenModal(!openModal);
  };

  return (
    <button className={s.container} onClick={handleClick}>
      <img src={CircleButton} alt="쓰기 버튼" />
      <div className={s.wrapper}>
        <img src={WriteIcon} alt="쓰기 아이콘" />
        <div className={s.text}>쓰기</div>
      </div>
    </button>
  );
}

import inactiveImageEllipse from "../../../../assets/icons/inactive-image-ellipse.svg";
import activeImageEllipse from "../../../../assets/icons/active-image-ellipse.svg";

import s from "./index.module.scss";

interface Props {
  idx: number;
  isActive: boolean;
  onClick: (idx: number) => void;
}

export const ImageIndicator = ({ idx, isActive, onClick }: Props) => {
  const ellipse = isActive ? activeImageEllipse : inactiveImageEllipse;

  return (
    <button className={s.ellipse} onClick={() => onClick(idx)}>
      <img src={ellipse} alt="이미지 인디케이터" />
    </button>
  );
};

import { useNavigate } from "react-router-dom";

import back from "../../../assets/icons/back.svg";
import ellipse from "../../../assets/icons/ellipse.svg";

import s from "./index.module.scss";

interface Props {
  title: string;
  hasMenu?: boolean;
  onClickMenu?: () => void;
}

// TODO: 컴포넌트명 변경 필요
export function FilterHeader({ title, hasMenu, onClickMenu }: Props) {
  const navigate = useNavigate();

  return (
    <div className={s.container}>
      <img
        className={s.back}
        src={back}
        alt="뒤로가기 버튼"
        onClick={() => navigate(-1)}
      />
      <div className={s.title}>{title}</div>
      {hasMenu && (
        <button className={s.menuButton} onClick={onClickMenu}>
          <img src={ellipse} alt="메뉴 버튼" />
          <img src={ellipse} alt="메뉴 버튼" />
          <img src={ellipse} alt="메뉴 버튼" />
        </button>
      )}
    </div>
  );
}

import { useNavigate } from "react-router-dom";

import back from "../../../assets/icons/back.svg";

import s from "./index.module.scss";

interface Props {
  title: string;
}

export function FilterHeader({ title }: Props) {
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
    </div>
  );
}

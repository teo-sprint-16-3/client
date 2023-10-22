import back from "../../../assets/icons/back.svg";

import s from "./index.module.scss";

interface Props {
  title: string;
}

export function FilterHeader({ title }: Props) {
  return (
    <div className={s.container}>
      <img className={s.back} src={back} alt="뒤로가기 버튼" />
      <div className={s.title}>{title}</div>
    </div>
  );
}

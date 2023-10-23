import { ReactNode } from "react";
import s from "./index.module.scss";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div className={s.wrap}>
      <div className={s.noteContent}>{children}</div>
    </div>
  );
}

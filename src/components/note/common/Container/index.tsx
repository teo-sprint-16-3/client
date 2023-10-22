import { ReactNode } from "react";
import s from "./index.module.scss";

interface Props {
  isBottomSheetOpen: boolean;
  children: ReactNode;
}

export default function Container({ isBottomSheetOpen, children }: Props) {
  return (
    <div className={`${isBottomSheetOpen ? s.bottomSheetOpen : ""}`}>
      <div className={s.noteContent}>{children}</div>
    </div>
  );
}

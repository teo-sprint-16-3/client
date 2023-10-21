import GNB from "../GNB";
import s from "./index.module.scss";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className={s.mostOuterWrapper}>
      <div className={s.layout}>
        <div>{children}</div>
        <GNB />
      </div>
    </div>
  );
}

import Header from "../Stamp/Header";

import s from "./index.module.scss";
import { badgeData } from "../../assets/data/badgeData";
import BadgeItem from "./common/BadgeItem";

const Badge = () => {
  return (
    <section className={s.wrap}>
      <Header title="획득 뱃지" />
      {badgeData.map((data: any) => (
        <BadgeItem key={data.id} data={data} />
      ))}
    </section>
  );
};

export default Badge;

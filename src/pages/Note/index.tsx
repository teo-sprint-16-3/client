import { Header } from "../../components/Note/Header";
import { CategoryTab } from "../../components/Note/CategoryTab";
import { SortingTab } from "../../components/Note/SortingTab";
import { TripGrid } from "../../components/Note/TripGrid";
import { WriteButton } from "../../components/Note/common/WriteButton";
import GNB from "../../components/GNB";

import s from "./index.module.scss";

export function Note() {
  return (
    <div className={s.container}>
      <Header />
      <CategoryTab />
      <div className={s.wrapper}>
        <SortingTab />
        {/* <TripGrid /> */}
        {/* <WriteButton /> */}
      </div>
      {/* <GNB /> */}
    </div>
  );
}

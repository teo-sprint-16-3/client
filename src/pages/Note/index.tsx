import { Header } from "../../components/Note/Header";
import { Navbar } from "../../components/Note/Navbar";
import { TripGrid } from "../../components/Note/TripGrid";
import { WriteButton } from "../../components/Note/common/WriteButton";

import s from "./index.module.scss";

export function Note() {
  return (
    <div className={s.container}>
      <Header />
      <TripGrid />
      <WriteButton />
      <Navbar />
    </div>
  );
}

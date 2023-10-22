import { Header } from "../../components/Note/Header";
import { TripGrid } from "../../components/Note/TripGrid";
import { WriteButton } from "../../components/Note/common/WriteButton";
import { Navbar } from "../../components/Note/Navbar";
import { useRecoilState } from "recoil";
import {
  focusMapState,
  focusNoteState,
  focusMyState,
} from "../../recoil/sample/atom";

import s from "./index.module.scss";

export function Note() {
  const [focusMap, setFocusMap] = useRecoilState(focusMapState);
  const [focusNote, setFocusNote] = useRecoilState(focusNoteState);
  const [focusMy, setFocusMy] = useRecoilState(focusMyState);
  if (focusMap) setFocusMap(!focusMap);
  if (!focusNote) setFocusNote(!focusNote);
  if (focusMy) setFocusMy(!focusMy);

  return (
    <div className={s.container}>
      <Header />
      <TripGrid />
      <WriteButton />
      {/* <Navbar /> */}
    </div>
  );
}

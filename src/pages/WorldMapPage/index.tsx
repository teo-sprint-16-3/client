import WorldMap from "../../components/WorldMap";
import GNB from "../../components/GNB";
import { useRecoilState } from "recoil";
import {
  focusMapState,
  focusNoteState,
  focusMyState,
} from "../../recoil/sample/atom";

import s from "./index.module.scss";

export default function WorldMapPage() {
  const [focusMap, setFocusMap] = useRecoilState(focusMapState);
  const [focusNote, setFocusNote] = useRecoilState(focusNoteState);
  const [focusMy, setFocusMy] = useRecoilState(focusMyState);
  if (!focusMap) setFocusMap(!focusMap);
  if (focusNote) setFocusNote(!focusNote);
  if (focusMy) setFocusMy(!focusMy);
  return (
    <div className={s.wrapper}>
      <WorldMap />
      <GNB />
    </div>
  );
}

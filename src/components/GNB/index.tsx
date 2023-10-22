import { useRecoilState } from "recoil";
import {
  focusMapState,
  focusNoteState,
  focusMyState,
} from "../../recoil/sample/atom";

import MapPinBlue from "../../assets/icons/mapPinBlue.svg";
import NoteBlue from "../../assets/icons/noteBlue.svg";
import MyBlue from "../../assets/icons/myBlue.svg";
import MapPinGray from "../../assets/icons/mapPinGray.svg";
import NoteGray from "../../assets/icons/noteGray.svg";
import MyGray from "../../assets/icons/myGray.svg";
import s from "./index.module.scss";

export default function GNB() {
  const [focusMap, setFocusMap] = useRecoilState(focusMapState);
  const [focusNote, setFocusNote] = useRecoilState(focusNoteState);
  const [focusMy, setFocusMy] = useRecoilState(focusMyState);

  return (
    <div className={s.gnbWrapper}>
      <div
        className={s.gnbBox}
        onClick={() => {
          if (!focusMap) setFocusMap(!focusMap);
          if (focusNote) setFocusNote(!focusNote);
          if (focusMy) setFocusMy(!focusMy);
        }}
      >
        {focusMap ? (
          <img src={MapPinBlue} alt="map icon focus" />
        ) : (
          <img src={MapPinGray} alt="map icon unfocus" />
        )}
        <div className={focusMap ? `${s.font} ${s.focus}` : `${s.font}`}>
          지도
        </div>
      </div>
      <div
        className={s.gnbBox}
        onClick={() => {
          if (focusMap) setFocusMap(!focusMap);
          if (!focusNote) setFocusNote(!focusNote);
          if (focusMy) setFocusMy(!focusMy);
        }}
      >
        {focusNote ? (
          <img src={NoteBlue} alt="note icon focus" />
        ) : (
          <img src={NoteGray} alt="note icon unfocus" />
        )}
        <div className={focusNote ? `${s.font} ${s.focus}` : `${s.font}`}>
          노트
        </div>
      </div>
      <div
        className={s.gnbBox}
        onClick={() => {
          if (focusMap) setFocusMap(!focusMap);
          if (focusNote) setFocusNote(!focusNote);
          if (!focusMy) setFocusMy(!focusMy);
        }}
      >
        {focusMy ? (
          <img src={MyBlue} alt="note icon focus" />
        ) : (
          <img src={MyGray} alt="note icon unfocus" />
        )}
        <div className={focusMy ? `${s.font} ${s.focus}` : `${s.font}`}>
          마이페이지
        </div>
      </div>
    </div>
  );
}

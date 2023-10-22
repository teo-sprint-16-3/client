import GNB from "../../components/GNB";
import My from "../../components/My";
import { useRecoilState } from "recoil";
import {
  focusMapState,
  focusNoteState,
  focusMyState,
} from "../../recoil/sample/atom";

const MyPage = () => {
  const [focusMap, setFocusMap] = useRecoilState(focusMapState);
  const [focusNote, setFocusNote] = useRecoilState(focusNoteState);
  const [focusMy, setFocusMy] = useRecoilState(focusMyState);
  if (focusMap) setFocusMap(!focusMap);
  if (focusNote) setFocusNote(!focusNote);
  if (!focusMy) setFocusMy(!focusMy);

  return (
    <div>
      <My />
      <GNB />
    </div>
  );
};

export default MyPage;

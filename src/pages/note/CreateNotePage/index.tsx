import SubmitButton from "../../../components/common/Buttons/SubmitButton";
import Container from "../../../components/Note/common/Container";
import BgmInput from "../../../components/Note/BgmInput";
import DateInput from "../../../components/Note/DateInput";
import LocationInput from "../../../components/Note/LocationInput";
import PictureInput from "../../../components/Note/PictureInput";
import TextInput from "../../../components/Note/TextInput";
import TitleInput from "../../../components/Note/TitleInput";
import Header from "../../../components/Note/common/Header";
import { useState } from "react";
import BottomSheet from "../../../components/Note/common/BottomSheet";
import { produce } from "immer";

export default function CreateNotePage() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [bottomSheetContent, setBottomSheetContent] = useState(null);
  const [fileUrls, setFileUrls] = useState<string[]>(["", "", ""]);

  const handleBottomSheetOpen = (content: any): void => {
    setBottomSheetContent(content);
    setIsBottomSheetOpen(true);
  };

  const handleBottomSheetClose = () => {
    setIsBottomSheetOpen(false);
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    setFileUrls(
      produce((draft) => {
        draft[index] = fileUrl;
      }),
    );
  };

  return (
    <>
      <Container isBottomSheetOpen={isBottomSheetOpen}>
        <Header />
        <TitleInput />
        <DateInput onSelectCountry={handleBottomSheetOpen} />
        <LocationInput onSelectCountry={handleBottomSheetOpen} />
        <BgmInput />
        <PictureInput fileUrls={fileUrls} onChangeFile={onChangeFileUrls} />
        <TextInput />
        <SubmitButton />
      </Container>

      <div>
        {isBottomSheetOpen && (
          <BottomSheet
            title="Bottom Sheet Title"
            onClose={handleBottomSheetClose}
          >
            {bottomSheetContent}
          </BottomSheet>
        )}
      </div>
    </>
  );
}

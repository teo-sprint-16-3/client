import SubmitButton from "../../../components/common/Buttons/SubmitButton";
import Container from "../../../components/common/Container";
import BgmInput from "../../../components/note/BgmInput";
import DateInput from "../../../components/note/DateInput";
import LocationInput from "../../../components/note/LocationInput";
import PictureInput from "../../../components/note/PictureInput";
import TextInput from "../../../components/note/TextInput";
import TitleInput from "../../../components/note/TitleInput";
import Header from "../../../components/note/common/Header";

export default function CreateNotePage() {
  return (
    <Container>
      <Header />
      <TitleInput />
      <DateInput />
      <LocationInput />
      <BgmInput />
      <PictureInput />
      <TextInput />

      <SubmitButton />
    </Container>
  );
}

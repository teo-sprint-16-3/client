import SubmitButton from "../../../components/common/Buttons/SubmitButton";
import Container from "../../../components/Note/common/Container";
import BgmInput from "../../../components/Note/BgmInput";
import DateInput from "../../../components/Note/DateInput";
import LocationInput from "../../../components/Note/LocationInput";
import PictureInput from "../../../components/Note/PictureInput";
import TextInput from "../../../components/Note/TextInput";
import TitleInput from "../../../components/Note/TitleInput";
import Header from "../../../components/Note/common/Header";

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

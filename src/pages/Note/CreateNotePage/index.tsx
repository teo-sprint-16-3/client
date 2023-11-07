import { useRecoilState } from "recoil";
import { noteFormState } from "../../../recoil/post/atom";
import SubmitButton from "../../../components/common/Buttons/SubmitButton";
import Container from "../../../components/Note/common/Container";
import BgmInput from "../../../components/Note/BgmInput";
import DateInput from "../../../components/Note/DateInput";
import LocationInput from "../../../components/Note/LocationInput";
import PictureInput from "../../../components/Note/PictureInput";
import TextInput from "../../../components/Note/TextInput";
import TitleInput from "../../../components/Note/TitleInput";
import Header from "../../../components/Note/common/Header";
import { useState, KeyboardEvent } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { produce } from "immer";

import * as yup from "yup";
import CountryInput from "../../../components/Note/CountryInput";
import Popup from "../../../components/common/Popup";

// interface NoteInputForm {
//   title: string;
//   date: { startDate: string; endDate: string };
//   country: {
//     id: string;
//     properties: {
//       name: string;
//       korName: string;
//     };
//   };
//   // country: { name: string; flag?: string };
//   location?: string;
//   bgm?: string;
//   images?: string[];
//   description?: string;
// }

interface NoteInputForm {
  title?: string;
  date?: { startDate: string; endDate: string };
  country?: {
    id: string;
    properties: {
      name: string;
      korName: string;
    };
  };
  location?: string;
  bgm?: string;
  images?: string[];
  description?: string;
}

interface IProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const notePostSchema = yup.object({
  // title: yup.string().required("제목을 입력해주세요."),
  // date: yup
  //   .object({
  //     startDate: yup.string(),
  //     endDate: yup.string(),
  //   })
  //   .test("start-end-date", "날짜를 선택해 주세요.", function (value) {
  //     const { startDate, endDate } = value;
  //     return startDate && endDate;
  //   }),
  // country: yup.object({
  //   name: yup.string().required("국가를 선택해 주세요."),
  //   flag: yup.string(),
  // }),
  // location: yup.string().max(30, "최대 30글자까지 입력 가능합니다."),
});

export default function CreateNotePage({ setOpenModal }: IProps) {
  const [formData, setFormData] = useRecoilState(noteFormState);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  // const [bottomSheetContent, setBottomSheetContent] = useState(null);
  const [fileUrls, setFileUrls] = useState<string[]>(["", "", ""]);
  // const [submitButtonDisable, setSubmitButtonDisable] = useState(true);
  const [sheetContent, setSheetContent] = useState("");
  const [date, setDate] = useState({
    startDate: "",
    endDate: "",
  });
  const [country, setCountry] = useState({
    id: "",
    properties: {
      name: "",
      korName: "",
    },
  });
  const [isPopup, setIsPopup] = useState(false);

  const { watch } = useForm();
  const useFormReturn = useForm({
    resolver: yupResolver(notePostSchema),
    mode: "onSubmit",
    defaultValues: {
      title: "",
      date: { startDate: "", endDate: "" },
      country: {
        id: "",
        properties: {
          name: "",
          korName: "",
        },
      },
    },
  });

  const handleBottomSheetOpen = (content: string) => {
    setSheetContent(content);
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

  const handleNoteSubmit = (data: NoteInputForm) => {
    const filteredFileUrls = fileUrls.filter((file) => file !== "");

    const noteData = {
      title: data.title ?? "",
      date,
      country,
      location: data.location ?? "",
      bgm: data.bgm ?? "",
      images: filteredFileUrls ?? [],
      description: data.description ?? "",
    };

    setFormData(noteData);
    // formData
    // console.log("제출완료", noteData);

    // TODO: 수정 기능
    // if(isEdit){
    //   updateNoteSubmit(noteData)
    // } else {
    //   postNoteSubmit(noteData)
    // }
  };

  const onKeyDownSubmit = (event: KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  const titleInput = watch("title");

  // const title = useFormReturn.watch("title");

  // useEffect(() => {
  //   if (titleInput && Object.keys(date).length > 0 && country.id) {
  //     setSubmitButtonDisable(false);
  //   }
  // }, [titleInput, date, country]);

  return (
    <>
      <Container>
        <form
          onKeyDown={onKeyDownSubmit}
          onSubmit={useFormReturn.handleSubmit(handleNoteSubmit)}
        >
          <Header setOpenModal={setOpenModal} />
          <TitleInput useForm={useFormReturn} />
          <DateInput
            setDate={setDate}
            sheetContent={sheetContent}
            isBottomSheetOpen={isBottomSheetOpen}
            onClose={handleBottomSheetClose}
            onSelectDate={handleBottomSheetOpen}
          />
          <CountryInput
            country={country}
            setCountry={setCountry}
            sheetContent={sheetContent}
            isBottomSheetOpen={isBottomSheetOpen}
            onClose={handleBottomSheetClose}
            onSelectCountry={handleBottomSheetOpen}
          />
          <LocationInput useForm={useFormReturn} />
          <BgmInput
            // onSearchBgm={handleBottomSheetOpen}
            onSearchBgm={() => setIsPopup(true)}
          />
          <PictureInput fileUrls={fileUrls} onChangeFile={onChangeFileUrls} />
          <TextInput useForm={useFormReturn} />
          <SubmitButton disabled={!titleInput} />
          {/* <SubmitButton disabled={submitButtonDisable} /> */}
        </form>
      </Container>

      {isPopup && <Popup title="BGM 기능 준비중" setIsPopup={setIsPopup} />}
    </>
  );
}

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
import { useState, KeyboardEvent, useEffect } from "react";
import BottomSheet from "../../../components/Note/common/BottomSheet";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { produce } from "immer";

import * as yup from "yup";
import CountryInput from "../../../components/Note/CountryInput";

interface NoteInputForm {
  title: string;
  // TODO: 바텀시트 구현 이후에 처리 예정
  // date: { startDate: string; endDate: string };
  // country: { name: string; flag?: string };
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
  const [bottomSheetContent, setBottomSheetContent] = useState(null);
  const [fileUrls, setFileUrls] = useState<string[]>(["", "", ""]);
  const [submitButtonDisable, setSubmitButtonDisable] = useState(true);

  const useFormReturn = useForm({
    resolver: yupResolver(notePostSchema),
    mode: "onSubmit",
    // defaultValues: {},
  });

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

  const handleNoteSubmit: SubmitHandler<NoteInputForm> = (data) => {
    const filteredFileUrls = fileUrls.filter((file) => file !== "");
    console.log("@@@", filteredFileUrls);
    const noteData = {
      title: data.title,
      // TODO: 바텀시트 구현 이후에 처리 예정
      // date: { startDate: data.date.startDate, endDate: data.date.endDate },
      // country: { name: data.country.name, flag: data.country.flag },
      // location: data.location ?? "",
      bgm: data.bgm ?? "",
      images: filteredFileUrls ?? [],
      description: data.description ?? "",
    };

    console.log("제출완료", noteData);

    // TODO: 수정 기능
    // if(isEdit){
    //   updateNoteSubmit(noteData)
    // } else {
    //   postNoteSubmit(noteData)
    // }
  };

  const onKeyDownSubmit = (event: KeyboardEvent<HTMLFormElement>) => {
    const { id } = event.target as Element;
    if (event.key === "Enter") {
      if (id === "desk-textarea") {
        return;
      }

      event.preventDefault();
    }
  };

  const title = useFormReturn.watch("title");
  // const date = useFormReturn.watch("date");
  // const country = useFormReturn.watch("country");

  useEffect(() => {
    if (title) {
      setSubmitButtonDisable(false);
    }
  }, [title]);

  return (
    <>
      <Container isBottomSheetOpen={isBottomSheetOpen}>
        <form
          onKeyDown={onKeyDownSubmit}
          onSubmit={useFormReturn.handleSubmit(handleNoteSubmit)}
        >
          <Header setOpenModal={setOpenModal} />
          <TitleInput useForm={useFormReturn} />
          <DateInput onSelectDate={handleBottomSheetOpen} />
          <CountryInput onSelectCountry={handleBottomSheetOpen} />
          <LocationInput useForm={useFormReturn} />
          <BgmInput onSearchBgm={handleBottomSheetOpen} />
          <PictureInput fileUrls={fileUrls} onChangeFile={onChangeFileUrls} />
          <TextInput useForm={useFormReturn} />
          <SubmitButton disabled={submitButtonDisable} />
        </form>
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

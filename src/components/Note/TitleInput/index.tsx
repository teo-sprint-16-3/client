import { Controller } from "react-hook-form";
import s from "./index.module.scss";
import Label from "../common/Label";
import { UseFormReturn } from "react-hook-form";
import Input from "../common/Input";
// import ErrorMessage from "../common/ErrorMessage";
import { useRecoilState } from "recoil";
import { noteFormState } from "../../../recoil/post/atom";

interface TitleInputProps {
  useForm: UseFormReturn;
}

export default function TitleInput({ useForm }: TitleInputProps) {
  const [formData, setFormData] = useRecoilState(noteFormState);

  // const handleChange = (e: any) => {
  //   setFormData({ ...formData, title: e.target.value });
  // };

  return (
    <div className={s.titleGroup}>
      <Label htmlFor="titleInput" text="페이지 제목" isRequired={true} />
      <Controller
        name="title"
        control={useForm.control}
        render={({
          field: { onChange, value },
          // , formState: { errors }
        }) => (
          <>
            <Input
              id="titleInput"
              value={value || ""}
              onChange={onChange}
              // onChange={handleChange}
              placeholder="제목을 입력해 주세요."
            />
            {/* <ErrorMessage
              message={errors.noteTitle?.message?.message || null}
            /> */}
          </>
        )}
      />
    </div>
  );
}

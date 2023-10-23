import { Controller } from "react-hook-form";
import s from "./index.module.scss";
import Label from "../common/Label";
import { UseFormReturn } from "react-hook-form";
import Input from "../common/Input";
// import ErrorMessage from "../common/ErrorMessage";

interface TitleInputProps {
  useForm: UseFormReturn;
}

export default function TitleInput({ useForm }: TitleInputProps) {
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

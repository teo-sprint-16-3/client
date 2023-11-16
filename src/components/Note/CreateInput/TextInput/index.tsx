import s from "./index.module.scss";
import { Controller } from "react-hook-form";
import { UseFormReturn } from "react-hook-form";
import Label from "../../common/Label";

interface TextInputProps {
  useForm: UseFormReturn;
}

export default function TextInput({ useForm }: TextInputProps) {
  return (
    <div className={s.descriptionGroup}>
      <Label htmlFor="descriptionInput" text="자세한 설명" isRequired={false} />
      <Controller
        name="description"
        control={useForm.control}
        render={({ field: { onChange, value } }) => (
          <textarea
            id="descriptionInput"
            className={s.descriptionTextarea}
            value={value || ""}
            onChange={onChange}
            placeholder="여행에서 있던 일을 기록해 주세요."
          />
        )}
      />
    </div>
  );
}

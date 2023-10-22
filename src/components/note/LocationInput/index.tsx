import { Controller } from "react-hook-form";
import Label from "../common/Label";
import s from "./index.module.scss";
import { UseFormReturn } from "react-hook-form";
import Input from "../common/Input";

interface LocationInputProps {
  useForm: UseFormReturn;
}

export default function LocationInput({ useForm }: LocationInputProps) {
  return (
    <div className={s.locationGroup}>
      <Label htmlFor="locationInput" text="장소" isRequired={false} />
      <Controller
        name="location"
        control={useForm.control}
        render={({ field: { onChange, value } }) => (
          <Input
            id="locationInput"
            value={value || ""}
            onChange={onChange}
            placeholder="장소 상세 설명"
          />
        )}
      />
    </div>
  );
}

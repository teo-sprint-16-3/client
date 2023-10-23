import s from "./index.module.scss";
import UploadFile from "../common/UploadFile";
import Label from "../common/Label";

interface PictureInputProps {
  fileUrls: string[];
  onChangeFile: (fileUrl: string, index: number) => void;
}

export default function PictureInput({
  fileUrls,
  onChangeFile,
}: PictureInputProps) {
  return (
    <div className={s.pictureGroup}>
      <Label htmlFor="pictureInput" text="사진" isRequired={false} />
      <div className={s.uploadContainer}>
        {fileUrls.map((file: string, index: number) => (
          <UploadFile
            key={index}
            index={index}
            fileUrl={file}
            onChangeFileUrls={onChangeFile}
          />
        ))}
      </div>
    </div>
  );
}

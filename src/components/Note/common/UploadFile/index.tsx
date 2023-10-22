import { ChangeEvent, useRef } from "react";
import ImageDeleteButton from "../../../../assets/icons/imageDeleteButton.svg";
import s from "./index.module.scss";

interface UploadFileProps {
  index: number;
  fileUrl: string;
  onChangeFileUrls: (imageUrl: string, index: number) => void;
}

export default function UploadFile({
  index,
  fileUrl,
  onChangeFileUrls,
}: UploadFileProps) {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleUploadFile = () => {
    fileRef.current?.click();
  };

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      onChangeFileUrls(imageUrl, index);
    }
  };

  const deleteFile = () => {
    onChangeFileUrls("", index);
  };

  return (
    <>
      <div className={s.uploadContainer}>
        {fileUrl ? (
          <div>
            <img
              className={s.uploadImage}
              src={fileUrl}
              alt="image"
              onClick={handleUploadFile}
            />
            <img
              className={s.deleteButton}
              src={ImageDeleteButton}
              onClick={deleteFile}
              alt="삭제"
            />
          </div>
        ) : (
          <button className={s.uploadButton} onClick={handleUploadFile}>
            +
          </button>
        )}
      </div>

      <input
        className={s.pictureInput}
        type="file"
        ref={fileRef}
        onChange={onChangeFile}
      />
    </>
  );
}

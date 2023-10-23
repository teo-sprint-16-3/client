import calendarIcon from "../../../../assets/icons/calendar.svg";
import locationIcon from "../../../../assets/icons/location.svg";
import bgmIcon from "../../../../assets/icons/music.svg";

import s from "./index.module.scss";

interface Props {
  year: number;
  country: string;
  flag: string;
  title: string;
  date: string;
  location?: string;
  bgm?: string;
  image?: string;
  setIsPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export function NoteSummary({
  year,
  country,
  flag,
  title,
  date,
  location,
  bgm,
  image,
  setIsPopup,
}: Props) {
  return (
    <div className={s.container} onClick={() => setIsPopup(true)}>
      <div className={s.titleWrapper}>
        <div className={s.tagChipWrapper}>
          <div className={`${s.tag} ${s.year}`}>{year}</div>
          <div className={`${s.tag} ${s.country}`}>{country}</div>
          <img className={s.flag} src={flag} alt="국기 이미지" />
        </div>
        <div className={s.title}>{title}</div>
      </div>
      <div className={s.contentWrapper}>
        <div className={s.descriptionWrapper}>
          <div className={s.descriptionBox}>
            <img src={calendarIcon} alt="달력 이미지" />
            <div className={s.description}>{date}</div>
          </div>
          {location !== undefined && (
            <div className={s.descriptionBox}>
              <img src={locationIcon} alt="위치 이미지" />
              <div className={s.description}>{location}</div>
            </div>
          )}
          {bgm !== undefined && (
            <div className={s.descriptionBox}>
              <img src={bgmIcon} alt="음악 이미지" />
              <div className={s.description}>{bgm}</div>
            </div>
          )}
        </div>
        {image !== undefined && (
          <img className={s.image} src={image} alt="여행 이미지" />
        )}
      </div>
    </div>
  );
}

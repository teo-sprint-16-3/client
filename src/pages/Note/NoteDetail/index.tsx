import { useState } from "react";

import { FilterHeader } from "../../../components/Note/FilterHeader";
import { TagChip } from "../../../components/Note/common/TagChip";
import { BottomSheet } from "../../../components/Note/NoteDetail/BottomSheet";
import { DeletePopup } from "../../../components/Note/NoteDetail/DeletePopup";

import calendarBlue from "../../../assets/icons/calendar-blue.svg";
import locationBlue from "../../../assets/icons/location-blue.svg";
import musicBlue from "../../../assets/icons/music-blue.svg";

import s from "./index.module.scss";

// TODO: To be changed to real data(API)
const mockData = {
  year: 2023,
  country: "몽골",
  flag: "/src/assets/countryFlags/Mongolia.svg",
  title: "몽골 8일차🐴 말타고 초원 달린 날",
  date: "2023.07.15",
  location: "욜링암 협곡 사이",
  music: "BOL4 - TRAVEL",
  image: "/src/assets/images/note1.png",
  description: `생각보다 재밌던 말타기🐴 말이 엄청나게 큰 동물
  이란 것도 처음 알았다. 말에 올라가자 바닥이 꽤 멀어서 처음에는 살짝 긴장했지만 나중에는 적응해서 재밌었다!
  케이와 릿은 승마가 처음이라 했는데 바로 적응해서 신나게 앞으로 나가서 넘넘 부러웠다🥺 
  
  반지의 제왕 세트장에 들어온 듯한 협곡 사이를 천천히 걷다 보니까 반지원정대가 된 기분이었다`,
};
const {
  year,
  country,
  flag,
  title,
  date,
  location,
  music,
  image,
  description,
} = mockData;

export function NoteDetail() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleOpenPopup = () => {
    setIsMenuOpen(false);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleDeletePage = () => {
    // TODO: 페이지 삭제 API 호출
    // 아래는 임시
    setIsPopupOpen(false);
    console.log("페이지 삭제 API 호출");
  };

  return (
    <div className={s.container}>
      <FilterHeader title={title} hasMenu onClickMenu={handleOpenMenu} />
      {/* TODO: 컴포넌트로 분리 */}
      <div className={s.summaryWrapper}>
        <div className={s.titleWrapper}>
          <TagChip year={year} country={country} flag={flag} />
          <div className={s.title}>{title}</div>
        </div>
        <div className={s.infoWrapper}>
          <div className={s.dateWrapper}>
            <img className={s.icon} src={calendarBlue} alt="달력 아이콘" />
            <span className={s.infoType}>날짜</span>
            <span>{date}</span>
          </div>
          <div className={s.locationWrapper}>
            <img className={s.icon} src={locationBlue} alt="위치 아이콘" />
            <span className={s.infoType}>장소</span>
            {country}
            <br />
            {location}
          </div>
          <div className={s.musicWrapper}>
            <img className={s.icon} src={musicBlue} alt="음악 아이콘" />
            <span className={s.infoType}>BGM</span>
            <span>{music}</span>
          </div>
        </div>
      </div>
      <img
        className={s.image}
        src="/src/assets/images/note1.png"
        alt="노트 이미지"
      />
      {/* TODO: 이미지와 설명 사이에 ellipse 인디케이터 있어야 함 */}
      <div className={s.descriptionWrapper}>
        {description.split("\n").map((line, index) => (
          <p key={index}>
            {line}
            <br />
          </p>
        ))}
      </div>
      {isMenuOpen && (
        <BottomSheet onClose={handleCloseMenu} onDelete={handleOpenPopup} />
      )}
      {isPopupOpen && (
        <DeletePopup onClose={handleClosePopup} onDelete={handleDeletePage} />
      )}
    </div>
  );
}

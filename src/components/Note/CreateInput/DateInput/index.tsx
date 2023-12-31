import { useState } from "react";
import { DateRange } from "react-date-range";
import dayjs from "dayjs";
import { useRecoilState } from "recoil";
import { noteFormState } from "../../../../recoil/post/atom";

import Label from "../../common/Label";
import s from "./index.module.scss";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import BottomSheet from "../../common/BottomSheet";
import { addDays, subDays } from "date-fns";
import type { Range } from "react-date-range";
import type { RangeKeyDict } from "react-date-range";

interface DateObject {
  startDate: string;
  endDate: string;
}
interface DateInputProps {
  onSelectDate: (content: string) => void;
  onClose: () => void;
  setDate: (date: DateObject) => void;
  sheetContent: string;
  isBottomSheetOpen: boolean;
}

export default function DateInput({
  onSelectDate,
  onClose,
  setDate,
  sheetContent,
  isBottomSheetOpen,
}: DateInputProps) {
  const [formData, setFormData] = useRecoilState(noteFormState);
  const [openCalender, setOpenCalendar] = useState(false);

  // const [selectDate, setSelectDate] = useState([
  //   {
  //     startDate: null,
  //     endDate: new Date(""),
  //     key: "selection",
  //   },
  // ]);
  const [selectDate, setSelectDate] = useState<Range[] | undefined>([
    {
      startDate: subDays(new Date(), 0),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ]);

  const handleSaveButton = () => {
    setOpenCalendar(false);
    onClose();
  };

  const handleOpenCalender = () => {
    onSelectDate("calendar");
    setOpenCalendar(true);
  };

  const handleSelectDate = (ranges: RangeKeyDict) => {
    setSelectDate([ranges.selection]);

    if ([ranges.selection][0].startDate !== [ranges.selection][0].endDate) {
      setFormData({
        ...formData,
        date: {
          startDate: dayjs([ranges.selection][0].startDate).format(
            "YYYY.MM.DD",
          ),
          endDate: dayjs([ranges.selection][0].endDate).format("YYYY.MM.DD"),
        },
      });
      setDate({
        startDate: dayjs([ranges.selection][0].startDate).format("YYYY.MM.DD"),
        endDate: dayjs([ranges.selection][0].endDate).format("YYYY.MM.DD"),
      });
    }
  };

  return (
    <div className={s.dateGroup}>
      <Label htmlFor="dateSelect" text="날짜" isRequired={true} />
      <div className={s.calendarGroup}>
        <button
          id="dateInput"
          type="button"
          className={s.dateButton}
          onClick={handleOpenCalender}
        >
          {formData.date.startDate ? formData.date.startDate : "시작일"}
        </button>
        {/* <span className={s.separator}>-</span> */}
        <button
          id="dateInput"
          type="button"
          className={s.dateButton}
          onClick={handleOpenCalender}
        >
          {formData.date.endDate ? formData.date.endDate : "종료일"}
        </button>
      </div>
      <div>
        {isBottomSheetOpen && sheetContent === "calendar" && (
          <BottomSheet
            title="날짜 선택"
            onSave={handleSaveButton}
            onClose={onClose}
          >
            <div>
              {openCalender && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => handleSelectDate(item)}
                  dateDisplayFormat="yyyy-MM-dd"
                  moveRangeOnFirstSelection={false}
                  ranges={selectDate}
                />
              )}
            </div>
          </BottomSheet>
        )}
      </div>

      {/* <div className={s.calendar}>
          {openCalender && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => handleSelectDate(item)}
              dateDisplayFormat="MM-dd-yyyy"
              moveRangeOnFirstSelection={false}
              ranges={selectDate}
            />
          )}
        </div> */}
    </div>
  );
}

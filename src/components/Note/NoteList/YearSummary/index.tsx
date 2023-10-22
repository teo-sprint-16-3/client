import s from "./index.module.scss";

interface Props {
  year: number;
  flags: string[];
  count: number;
}

const FLAG_MAX = 5;

export function YearSummary({ year, flags, count }: Props) {
  return (
    <div className={s.container}>
      <div className={s.flagWrapper}>
        <div className={s.text}>{year}</div>
        <div className={s.flagBox}>
          {flags !== undefined &&
            flags
              .slice(0, FLAG_MAX)
              .map((flag, index) => (
                <img
                  key={index}
                  className={s.flag}
                  src={flag}
                  alt="국기 이미지"
                />
              ))}
        </div>
        {count > FLAG_MAX && (
          <div className={s.subtext}>+{count - FLAG_MAX}</div>
        )}
      </div>
      <div className={s.countWrapper}>
        <div className={`${s.text} ${s.count}`}>{count}</div>
        <div className={s.text}>개</div>
      </div>
    </div>
  );
}

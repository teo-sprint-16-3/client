import s from "./index.module.scss";

interface Props {
  flag: string;
  name: string;
  count: number;
}

export function CountrySummary({ flag, name, count }: Props) {
  return (
    <div className={s.container}>
      <div className={s.countryWrapper}>
        <img className={s.flag} src={flag} alt="국기 이미지" />
        <div className={s.text}>{name}</div>
      </div>
      <div className={s.countWrapper}>
        <div className={`${s.text} ${s.count}`}>{count}</div>
        <div className={s.text}>개</div>
      </div>
    </div>
  );
}

import s from "./index.module.scss";

interface Props {
  year: number;
  country: string;
  flag: string;
}

export function TagChip({ year, country, flag }: Props) {
  return (
    <div className={s.container}>
      <span className={s.year}>{year}</span>
      <span className={s.country}>{country}</span>
      <img className={s.flag} src={flag} />
    </div>
  );
}

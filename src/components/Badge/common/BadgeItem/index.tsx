import s from "./index.module.scss";

interface IProps {
  data: IBadge;
}

const BadgeItem = ({ data }: IProps) => {
  return (
    <div className={s.wrap}>
      <div className={s.imgWrap}>
        <img src={data.img} alt={data.name} />
      </div>
      <div className={s.txtWrap}>
        <p className={s.name}>{data.name}</p>
        <span className={s.description}>{data.description}</span>
      </div>
    </div>
  );
};

export default BadgeItem;

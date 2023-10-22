import s from "./index.module.scss";

interface IProps {
  title: string;
}

const Header = ({ title }: IProps) => {
  return (
    <header className={s.wrap}>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;

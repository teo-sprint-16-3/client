import s from "./index.module.scss";

export default function Sample() {
  return (
    <div className={s.outerXl}>
      <div className={s.outerLg}>
        <div className={s.outerMd}>
          <h2>Hello from Sample</h2>
        </div>
      </div>
    </div>
  );
}

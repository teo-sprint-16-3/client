import { NavLink } from "react-router-dom";
<<<<<<< HEAD
import "./styles/app.scss";
import earthImg from "./assets/earth.png";

export default function App() {
  return (
    <div className="app">
      <header className="header-title">
        <h2> 세계 여행 어디까지 가봤니? </h2>
      </header>
      <main className="main">
        <img className="main-img" src={earthImg} alt="earth-img" />
      </main>
      <footer className="footer-button">
        <button className="social-login-button">소셜 로그인</button>
        <NavLink className="nav-link" to="/sample">
          <button className="explore-button">둘러보기</button>
        </NavLink>
      </footer>
    </div>
=======
import DefaultLayout from "./components/DefaultLayout";

export default function App() {
  return (
    <DefaultLayout>
      <h2>Hello from App</h2>
      <NavLink to="/sample">Sample Page</NavLink>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
    </DefaultLayout>
>>>>>>> 22a5cb003158628143e10fa73c2c45230c9c1d9e
  );
}

import { NavLink } from "react-router-dom";
import "./styles/app.scss";

export default function App() {
  return (
    <div className="app">
      <header>
        <h1> 세계 여행 어디까지 가봤니? </h1>
      </header>
      <NavLink to="/sample">Sample Page</NavLink>
    </div>
  );
}

import { NavLink } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";

export default function App() {
  return (
    <DefaultLayout>
      <h2>Hello from App</h2>
      <NavLink to="/sample">Sample Page</NavLink>
      <h2>Hello from App</h2>
      <h2>Hello from App</h2>
    </DefaultLayout>
  );
}

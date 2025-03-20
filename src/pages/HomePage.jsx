import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import APPNav from "../components/APPNav";

export default function HomePage() {
  return <div>
    <PageNav />
    <APPNav />
    <h1>WorldWise</h1>
    <Link to="/app">Go to the app</Link>
  </div>
}

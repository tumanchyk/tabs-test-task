import { NavLink } from "react-router-dom";
import "../index.css";

const Tab = ({nav: { title, path }}) => {
    return <NavLink className="navItem" to={path}>{title}</NavLink>
}
export default Tab;
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../context/Context";
import "./NavComponent.scss";

export default function NavComponent(){
    const {t} = useContext(Context)
    return (
    <div className="c-nav-container">
        <Link to="/marvel/characters" className="nav-link">{t("characters")}</Link>
        <Link to="/marvel/comics" className="nav-link">{t("comics")}</Link>
        <Link to="/marvel/series" className="nav-link">{t("series")}</Link>
    </div>
    )
}
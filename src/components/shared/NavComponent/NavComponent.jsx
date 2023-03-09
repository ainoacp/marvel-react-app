import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../context/Context";
import "./NavComponent.scss";

export default function NavComponent(){
    const {t} = useContext(Context)
    return (
    <div className="c-nav-container">
        <Link to="/characters" className="nav-link">{t("characters")}</Link>
        <Link to="/comics" className="nav-link">{t("comics")}</Link>
        <Link to="/series" className="nav-link">{t("series")}</Link>
    </div>
    )
}
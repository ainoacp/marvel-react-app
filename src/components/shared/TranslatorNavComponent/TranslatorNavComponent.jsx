import { useContext } from "react";
import { Context } from "../../../context/Context";
import "./TranslatorNavComponent.scss"

export default function TranslatorNavComponent() {

    const {t, changeLanguaje} = useContext(Context);

    return (
        <div className="c-translator-container">
            <button className="en-button" onClick={() => changeLanguaje('en')}>{t("")}</button>
            <button className="es-button" onClick={() => changeLanguaje('es')}>{t("")}</button> 
        </div>
    )
}
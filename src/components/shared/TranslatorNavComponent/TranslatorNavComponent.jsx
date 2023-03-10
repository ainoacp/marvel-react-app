import { useContext } from "react";
import { Context } from "../../../context/Context";
import "./TranslatorNavComponent.scss"

export default function TranslatorNavComponent() {

    const {t, translate} = useContext(Context);

    return (
        <div className="c-translator-container">
            <button className="en-button" onClick={() => translate('en')}>{t("")}</button>
            <button className="es-button" onClick={() => translate('es')}>{t("")}</button> 
        </div>
    )
}
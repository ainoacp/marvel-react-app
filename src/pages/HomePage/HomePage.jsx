import { useContext } from "react";
import { Context } from "../../context/Context";
import TranslatorNavComponent from "../../components/shared/TranslatorNavComponent/TranslatorNavComponent";
import NavComponent from "../../components/shared/NavComponent/NavComponent";

export default function HomePage() {

    const {t} = useContext(Context);

    return (
        <div className="c-home-container">
            <div className="c-home-header">
                <div className="c-home-buttons">
                    <TranslatorNavComponent />
                </div>
            </div>
            <div className="c-home-main">
                <h1 className="c-home-title">Marvel</h1>
            </div>
            <div className="c-home-footer">
                <NavComponent />
            </div>
        </div>
    )
}
import TranslatorNavComponent from "../../components/shared/TranslatorNavComponent/TranslatorNavComponent";
import NavComponent from "../../components/shared/NavComponent/NavComponent";
import './HomePage.scss'

export default function HomePage() {

    return (
        <div className="c-home-container">
            <div className="c-home-header">
                <div className="c-home-header_buttons">
                    <TranslatorNavComponent />
                </div>
            </div>
            <div className="c-home-main">
                {/* <h1 className="c-home-main_title">Marvel</h1> */}
            </div>
            <div className="c-home-footer">
                <NavComponent />
            </div>
        </div>
    )
}
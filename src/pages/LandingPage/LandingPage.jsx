import { useEffect, useState } from "react"
import HomePage from "../HomePage/HomePage";
import logo from "../../assets/marvel-logo.png";
import './LandingPage.scss';

export default function LandingPage() {
    const [landing, setLanding] = useState(true);

    const landingOut = () => {
        setTimeout(() => {
            setLanding(false);
        }, 3000);
    };

    useEffect(() => {
        landingOut();
    });

    return (
        <>
            {landing ? (
                <div className="c-landing">
                    <img className="c-landing_logo" src={logo} alt='logo' />
                </div>
            ) : (
                <HomePage />
            )}
        </>
    )
}
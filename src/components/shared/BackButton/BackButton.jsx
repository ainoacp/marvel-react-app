import { useState,useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import { Context } from "../../../context/Context";
import "./BackButton.scss";

export default function BackButton(){

    const {t} = useContext(Context) 

    const [prevUrl,setPrevUrl] = useState('');

    useEffect(() => {
        const urlArray = window.location.pathname.split('/');
        urlArray.pop()
        
        const prevUrlArray = [...urlArray]
        
        const prevUrl = prevUrlArray.join('/');
        setPrevUrl(prevUrl)
    }, []);

    return (
        <div className="c-backbutton-container">
            <Link to={prevUrl}>
                <button>← {t("Volver")}</button>
            </Link>
        </div>
    )
}
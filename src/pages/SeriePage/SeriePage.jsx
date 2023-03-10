import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailSerie from "../../components/shared/DetailSerie/DetailSerie";
import BackButton from "../../components/shared/BackButton/BackButton";
import TranslatorNavComponent from "../../components/shared/TranslatorNavComponent/TranslatorNavComponent";
import './SeriePage.scss';

export default function SeriePage() {

    let { id } = useParams();
    
    const [serie, setSerie] = useState(null);

    const url_serie = `https://gateway.marvel.com/v1/public/series/${id}?ts=1&apikey=c0992becb388f5ce26d640dceb1f1b6f&hash=b950312003836e9279ca37d5917e5d2b`;

    const getSerie = async () => {
        const res = await axios.get(url_serie);
        setSerie(res.data.data.results[0]);
        console.log(res.data.data.results[0]);
    }

    useEffect(() => {
        getSerie();
    }, [id]);

    if (!serie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="c-serie-container">
            <div className="c-serie-header">
                <div className="c-serie-header_buttons">
                    <BackButton/>
                    <TranslatorNavComponent/>
                </div>
            </div>
            <div className="c-serie-main">
                <DetailSerie serie={serie} />
            </div>
        </div>
    )
}
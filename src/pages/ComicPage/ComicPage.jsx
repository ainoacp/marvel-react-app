import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailComic from "../../components/shared/DetailComic/DetailComic";
import BackButton from "../../components/shared/BackButton/BackButton";
import TranslatorNavComponent from "../../components/shared/TranslatorNavComponent/TranslatorNavComponent";

export default function ComicPage() {
    
    let { id } = useParams();
    
    const [comic, setComic] = useState(null);

    const url_comic = `https://gateway.marvel.com/v1/public/comics/${id}?ts=1&apikey=c0992becb388f5ce26d640dceb1f1b6f&hash=b950312003836e9279ca37d5917e5d2b`;

    const getComic = async () => {
        const res = await axios.get(url_comic);
        setComic(res.data.data.results[0]);
        console.log(res.data.data.results[0]);
    }

    useEffect(() => {
        getComic();
    }, [id]);

    if (!comic) {
        return <div>Loading...</div>;
    }

    return (
        <div className="c-character-container">
            <div className="c-character-header">
                <div className="c-character-header_buttons">
                    <BackButton/>
                    <TranslatorNavComponent/>
                </div>
            </div>
            <div className="c-comic-main">
                <DetailComic comic={comic} />
            </div>
        </div>
    )
}
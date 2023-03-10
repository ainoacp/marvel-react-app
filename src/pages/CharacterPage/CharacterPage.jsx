import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailCharacter from "../../components/shared/DetailCharacter/DetailCharacter";
import BackButton from "../../components/shared/BackButton/BackButton";
import TranslatorNavComponent from "../../components/shared/TranslatorNavComponent/TranslatorNavComponent";
import './CharacterPage.scss';

export default function CharacterPage() {

    let { id } = useParams();
    
    const [character, setCharacter] = useState(null);

    const url_character = `https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=c0992becb388f5ce26d640dceb1f1b6f&hash=b950312003836e9279ca37d5917e5d2b`;

    const getCharacter = async () => {
        const res = await axios.get(url_character);
        setCharacter(res.data.data.results[0]);
        console.log(res.data.data.results[0]);
    }

    useEffect(() => {
        getCharacter();
    }, [id]);

    if (!character) {
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
            <div className="c-character-main">
                <DetailCharacter character={character} />
            </div>
        </div>
    )
}
import { useContext } from "react";
import { Context } from "../../../context/Context";
import './DetailCharacter.scss';

export default function DetailCharacter({ character }) {

    const {t} = useContext(Context) 
    
    return (
        <div className="c-character-card">
            <div className="c-character-card_main-section">
                <img src={`${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`} alt={character.name} />
                <h3>{character.name}</h3>
                <p>{character.description}</p>
            </div>
            <div className="c-character-card_info-section">
                <div className="c-character-card_info-section_container">
                    <h5>{t("COMICS")}</h5>
                    <ul>{character?.comics?.items.map((comic, index) => 
                        (<li key={index}>{comic.name}</li>))}
                    </ul>
                </div>
                <div className="c-character-card_info-section_container">
                    <h5>{t("EVENTOS")}</h5>
                    <ul>{character?.events?.items.map((event, index) => 
                        (<li key={index}>{event.name}</li>))}
                    </ul>
                </div>
                <div className="c-character-card_info-section_container">
                    <h5>{t("SERIES")}</h5>
                    <ul>{character?.series?.items.map((serie, index) => 
                        (<li key={index}>{serie.name}</li>))}
                    </ul>
                </div>
                <div className="c-character-card_info-section_container">
                    <h5>{t("HISTORIAS")}</h5>
                    <ul>{character?.stories?.items.map((story, index) => 
                        (<li key={index}>{story.name}</li>))}
                    </ul>
                </div>
                <div className="c-character-card_info-section_container">
                    <h5>{t("URLS")}</h5>
                    <ul>{character?.urls?.map((url, index) => 
                        (<a key={index} href={url.url}>{url.type}</a>))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
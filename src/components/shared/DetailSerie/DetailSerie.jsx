import { useContext } from "react";
import { Context } from "../../../context/Context";
import './DetailSerie.scss';

export default function DetailSerie({ serie }) {
    
    const {t} = useContext(Context) 
    
    return (
        <div className="c-serie-card">
            <div className="c-serie-card_main-section">
                <img src={`${serie.thumbnail.path}/portrait_incredible.${serie.thumbnail.extension}`} alt={serie.title} />
                <h1>{serie.title}</h1>
                <p>{serie?.description}</p>
            </div>
            <div className="c-serie-card_info-section">
                <div className="c-serie-card_info-section_container">
                    <h5>{t("PERSONAJES")}</h5>
                    <ul>{serie?.characters?.items.map((character, index) => (
                        <div>
                            <li key={index}>{character.name}</li>
                        </div>))}
                    </ul>
                </div>
                <div className="c-serie-card_info-section_container">
                    <h5>{t("COMICS")}</h5>
                    <ul>{serie?.comics?.items.map((comic, index) => (
                        <div>
                            <li key={index}>{comic.name}</li>
                        </div>))}
                    </ul>
                </div>
                <div className="c-serie-card_info-section_container">
                    <h5>{t("CREADORES")}</h5>
                    <ul>{serie?.creators?.items.map((creator, index) => (
                        <div>
                            <li key={index}>{creator.role}:<p key={index}>{creator.name}</p></li>
                        </div>))}
                    </ul>
                </div>
                <div className="c-serie-card_info-section_container">
                    <h5>{t("HISTORIAS")}</h5>
                    <ul>{serie?.stories?.items.map((story, index) => (
                        <div>
                            <li key={index}>{story.name}</li>
                        </div>))}
                    </ul>
                </div>
                <div className="c-serie-card_info-section_container">
                    <h5>{t("URLS")}</h5>
                    <ul>{serie?.urls?.map((url, index) =>
                        (<a key={index} href={url.url}>More Info</a>))} 
                    </ul>
                </div>
            </div>
        </div>
    )
}
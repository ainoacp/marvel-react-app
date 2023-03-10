import { useContext } from "react";
import { Context } from "../../../context/Context";
import './DetailComic.scss';

export default function DetailComic({ comic }) {
    
    const {t} = useContext(Context) 
    
    return (
        <div className="c-comic-card">
            <div className="c-comic-card_main-section">
                <img src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`} alt={comic.name} />
                <h1>{comic.title}</h1>
                <p>{comic.description || comic.variantDescription || comic.textObjects.map((item, index) => (<p key={index}>{item.text}</p>))}</p>
            </div>
            <div className="c-comic-card_info-section">
                <div className="c-comic-card_info-section_container">
                    <h5>{t("SERIES")}</h5>
                    <p>{comic?.series?.name}</p>
                </div>
                <div className="c-comic-card_info-section_container">
                    <h5>{t("CREADORES")}</h5>
                    <ul>{comic?.creators?.items.map((creator, index) => (
                        <div>
                            <li key={index}>{creator.role}:<p key={index}>{creator.name}</p></li>
                        </div>))}
                    </ul>
                </div>
                <div className="c-comic-card_info-section_container">
                    <h5>{t("URLS")}</h5>
                    <ul>{comic?.urls?.map((url, index) =>
                        (<a key={index} href={url.url}>More Info</a>))} 
                    </ul>
                </div>
            </div>
        </div>
    )
}
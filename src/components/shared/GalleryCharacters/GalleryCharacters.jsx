import { Link } from "react-router-dom";
import './GalleryCharacters.scss'

export default function GalleryCharacters({ characters }) {
    return (
            <div className="c-gallery-container">
                {characters.map((character) => (
                <figure character={character} key={character.id} className="c-gallery_card">
                    <img src={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`} alt={character.id} />
                    <figcaption>
                        <Link to={`/marvel/characters/${character.id}`}>{character.name}</Link>
                    </figcaption>
                </figure>))}
            </div>
    )
}
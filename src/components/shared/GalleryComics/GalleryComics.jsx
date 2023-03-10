import { Link } from "react-router-dom";
import './GalleryComics.scss'

export default function GalleryCharacters({ comics }) {
    return (
        <div className="c-gallery-container">
            {comics.map((comic) => (
            <figure character={comic} key={comic.id} className="c-gallery_card">
                <img src={`${comic.thumbnail.path}/standard_fantastic.${comic.thumbnail.extension}`} alt={comic.id} />
                <figcaption>
                    <Link to={`/marvel/comics/${comic.id}`}>{comic.title}</Link>
                </figcaption>
            </figure>))}
        </div>
    )
}
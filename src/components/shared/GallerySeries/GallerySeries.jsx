import { Link } from "react-router-dom";
import './GallerySeries.scss'

export default function GallerySeries({ series }) {
    return (
        <div className="c-gallery-container">
            {series.map((serie) => (
            <figure character={serie} key={serie.id} className="c-gallery_card">
                <img src={`${serie.thumbnail.path}/standard_fantastic.${serie.thumbnail.extension}`} alt={serie.id} />
                <figcaption>
                    <Link to={`/marvel/series/${serie.id}`}>{serie.title}</Link>
                </figcaption>
            </figure>))}
        </div>
    )
}
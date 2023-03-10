import { Link } from "react-router-dom";
import './HomeLink.scss'

export default function HomeLink() {
    return (
        <>
            <Link to="/marvel/home" className="c-link-home"></Link>
        </>
    )
}
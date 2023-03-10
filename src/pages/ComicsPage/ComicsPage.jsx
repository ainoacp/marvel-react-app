import axios from "axios";
import md5 from 'md5';
import { useEffect, useState } from "react"
import Searcher from "../../components/shared/Searcher/Searcher";
import GalleryComics from "../../components/shared/GalleryComics/GalleryComics";
import './ComicsPage.scss'
import HomeLink from "../../components/shared/HomeLink/HomeLink";
import TranslatorNavComponent from "../../components/shared/TranslatorNavComponent/TranslatorNavComponent";
import NavComponent from "../../components/shared/NavComponent/NavComponent";

export default function ComicsPage() {

    const [comics, setComics] = useState([])
    const [filteredComics, setFilterComics] = useState([])

    const url_comics = `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=c0992becb388f5ce26d640dceb1f1b6f&hash=b950312003836e9279ca37d5917e5d2b`;
    const getComics = async () => {
        const res = await axios.get(url_comics);
        const resFiltered = res.data.data.results
        setComics(resFiltered);
        setFilterComics(resFiltered);
        console.log(res.data.data.results)
    }

    const filterComics = async (searchText) => {
        let searchedComics = comics.filter(
            (comic) => comic.title.toLowerCase().includes(searchText.toLowerCase()));
        setFilterComics(searchedComics);
    }

    useEffect(() => {
        getComics('');    
    }, []);
    return (
        <div className="c-comics-container">
            <div className="c-comics-header">
                <div className="c-comics-header_buttons">
                    <HomeLink/>
                    <TranslatorNavComponent/>
                </div>
            </div>
            <div className="c-comics-main">
                <div className="c-comics-main_searcher">
                    <Searcher search={filterComics}/>
                </div>
                <GalleryComics comics={filteredComics}/>
            </div>
            <div className="c-comics-footer">
                <NavComponent/>
            </div>
        </div>
    )
}
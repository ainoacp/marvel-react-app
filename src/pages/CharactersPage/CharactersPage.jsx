import axios from "axios";
import { useEffect, useState } from "react";
import GalleryCharacters from "../../components/shared/GalleryCharacters/GalleryCharacters";
import Searcher from "../../components/shared/Searcher/Searcher";
import NavComponent from "../../components/shared/NavComponent/NavComponent"
import TranslatorNavComponent from "../../components/shared/TranslatorNavComponent/TranslatorNavComponent";
import HomeLink from "../../components/shared/HomeLink/HomeLink";
import './CharactersPage.scss'

export default function CharactersPage() {

    const [characters, setCharacters] = useState([])
    const [filteredCharacters, setFilterCharacters] = useState([])

    const url_characters = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=c0992becb388f5ce26d640dceb1f1b6f&hash=b950312003836e9279ca37d5917e5d2b`;

    const getCharacters = async () => {
        const res = await axios.get(url_characters);
        const resFiltered = res.data.data.results
        setCharacters(resFiltered);
        setFilterCharacters(resFiltered);
        console.log(res.data.data.results)
    }

    const filterCharacters = async (searchText) => {
        let searchedCharacters = characters.filter(
            (character) => character.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilterCharacters(searchedCharacters);
    }

    useEffect(() => {
        getCharacters('');    
    }, []);

    return (
        <div className="c-characters-container">
            <div className="c-characters-header">
                <div className="c-characters-header_buttons">
                    <HomeLink/>
                    <TranslatorNavComponent/>
                </div>
            </div>
            <div className="c-characters-main">
                <div className="c-characters-main_searcher">
                    <Searcher search={filterCharacters}/>
                </div>
                <GalleryCharacters characters={filteredCharacters}/>
            </div>
            <div className="c-characters-footer">
                <NavComponent/>
            </div>
        </div>
    )
}
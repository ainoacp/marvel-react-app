import axios from "axios";
import { useEffect, useState } from "react";
import HomeLink from "../../components/shared/HomeLink/HomeLink";
import NavComponent from "../../components/shared/NavComponent/NavComponent";
import Searcher from "../../components/shared/Searcher/Searcher";
import TranslatorNavComponent from "../../components/shared/TranslatorNavComponent/TranslatorNavComponent";
import GallerySeries from "../../components/shared/GallerySeries/GallerySeries";
import './SeriesPage.scss'

export default function SeriesPage() {

    const [series, setSeries] = useState([])
    const [filteredSeries, setFilterSeries] = useState([])

    const url_series = `https://gateway.marvel.com/v1/public/series?ts=1&apikey=c0992becb388f5ce26d640dceb1f1b6f&hash=b950312003836e9279ca37d5917e5d2b`;

    const getSeries = async () => {
        const res = await axios.get(url_series);
        const resFiltered = res.data.data.results
        setSeries(resFiltered);
        setFilterSeries(resFiltered);
        console.log(res.data.data.results)
    }

    const filterSeries = async (searchText) => {
        let searchedSeries = series.filter(
            (serie) => serie.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilterSeries(searchedSeries);
    }

    useEffect(() => {
        getSeries('');    
    }, []);

    return (
        <div className="c-series-container">
            <div className="c-series-header">
                <div className="c-series-header_buttons">
                    <HomeLink/>
                    <TranslatorNavComponent/>
                </div>
            </div>
            <div className="c-series-main">
                <div className="c-series-main_searcher">
                    <Searcher search={filterSeries}/>
                </div>
                <GallerySeries series={filteredSeries}/>
            </div>
            <div className="c-series-footer">
                <NavComponent/>
            </div>
        </div>
    )

}
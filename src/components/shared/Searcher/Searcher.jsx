import './Searcher.scss'
import Magnifier from '../../../assets/lupa.png';
import { useContext } from 'react';
import { Context } from '../../../context/Context';

export default function Searcher({ search }) {

    const {t} = useContext(Context) 

    const change = (e) => {
        console.log(e.target.value)
        search(e.target.value)
    }
    return (
        <div className="form-container">
            <form className="form">
                <input type="text" onChange={change} placeholder={t("Buscar")}/>
                <img alt="magnifier" src={Magnifier}/>
            </form>
        </div>
    )
}
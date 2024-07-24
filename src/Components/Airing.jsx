import React from "react";
import { useGlobalContext } from "../Context/global";
import { Link } from "react-router-dom";
import "./Popular.css"

const  Airing = ({rendered}) => {
    const {airingAnime ,isSearch, searchResults} = useGlobalContext()

    const conditionalRender = () => {
        if(!isSearch && rendered === 'airing'){
            return airingAnime?.map((anime) => {
                return <div className="card">
                <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                 <img src={anime.images.jpg.image_url} alt="" />
                 <div className="name">{anime.title}</div>
             </Link>
             </div>
            })
        }else{
            return searchResults?.map((anime) => {
                return <div className="card">
                <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                 <img src={anime.images.jpg.image_url} alt="" />
                 <div className="name">{anime.title}</div>
             </Link>
             </div>
            })
        }
    }

    return (
            <div className="airing-anime">
                {conditionalRender()}
            </div>
    )
}

export default Airing;
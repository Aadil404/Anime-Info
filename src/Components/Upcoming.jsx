import React from "react";
import { useGlobalContext } from "../Context/global";
import "./Popular.css"
import { Link } from "react-router-dom";

const  Upcoming = ({rendered}) => {
    const {upcomingAnime ,isSearch, searchResults} = useGlobalContext()

    const conditionalRender = () => {
        if(!isSearch && rendered === 'upcoming'){
            return upcomingAnime?.map((anime) => {
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
            <div className="upcoming-anime">
                {conditionalRender()}
            </div>
    )
}

export default Upcoming;
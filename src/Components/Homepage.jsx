import React, { useState } from "react";
import { useGlobalContext } from "../Context/global";
import Popular from "./Popular";
import "./Homepage.css"
import Upcoming from "./Upcoming";
import Airing from "./Airing";

const Homepage = () => {
    const {handleSubmit, 
        search, 
        searchAnime,
        handleChange ,
        getUpcomingAnime,
        getAiringAnime,
        getPopularAnime,
    } = useGlobalContext();
  const [rendered, setRendered] = useState("popular");

  const switchComponent = () => {
    switch (rendered) {
      case "popular":
        return <Popular rendered={rendered} />;
      case 'airing':
          return <Airing rendered={rendered} />
      case 'upcoming':
          return <Upcoming rendered={rendered} />
      default:
        return <Popular rendered={rendered} />;
    }
  };

  
  return (
    <div>
      <header>
        <div className="search-container">
                    
                    <form action="" className="search-form" onSubmit={handleSubmit}>
                        <div className="input-control">
                            <input type="text" placeholder="Search Anime" value={search} onChange={handleChange} />
                            <button type="submit">Search</button>
                        </div>
                    </form>
                    <div className="btns">
                    <div className="filter-btn popular-filter">
                        <button onClick={() => {
                            setRendered('popular')
                        }}>Popular<i className="fas fa-fire"></i></button>
                    </div>
                    <div className="filter-btn airing-filter">
                        <button onClick={() => {
                            setRendered('airing')
                            getAiringAnime()
                        }}>Airing</button>
                    </div>
                    <div className="filter-btn upcoming-filter">
                        <button onClick={() => {
                            setRendered('upcoming')
                            getUpcomingAnime()
                        }}>Upcoming</button>
                    </div>
                    </div>
                    
                </div>
      </header>
      <div className="logo">
          <h1>
            {rendered === "popular"
              ? "Popular Animes"
              : rendered === "airing"
              ? "Airing Animes"
              : "Upcoming Animes"}
          </h1>
        </div>
      {switchComponent()}
    </div>
  );
};

export default Homepage;

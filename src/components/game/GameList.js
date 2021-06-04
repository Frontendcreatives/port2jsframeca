import React, { useState, useEffect } from "react";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import GameItem from "../game/GameItem";
import { API } from "../../constants/API";
import SearchGame from "../search/SearchGame";




function GameList() {

const [games, setGames] = useState([]);
const [filteredGames, setFilteredGames] = useState([]);
const apiKey = "?key=32d6ab81e3c54b0288ba59ab2d4e116c"    
    
   useEffect(() => {
        fetch(API + apiKey)
            .then(response => response.json())
            .then(json => {
                setGames(json.results);
                setFilteredGames(json.results);      
            })
            .catch(error => console.log(error));
            
    }, []);
    
    const filterGame = function(e) {
        
    const searchInp = e.target.value.toLowerCase();
    const filterArr = games.filter(function(gam) { 
     
        const lowCaseTitle = gam.name.toLowerCase();
        
        if (lowCaseTitle.includes(searchInp)) {
    
        return true;
         
        }
        
        return false;
        
    });
    
    setFilteredGames(filterArr);
    }; 
        
        return (
    
        <div>
          <SearchGame handleSrc={filterGame} />
            <Row>
                {filteredGames.map(g => {
                    const { id, name, background_image, rating, released } = g;
    
        return (    
            
            <Col sm={12} md={6} key={id}>
                <GameItem id={id} name={name} background_image={background_image} rating={rating} released={released}/>
            </Col>
            
				);
    
        })}
            </Row>
        </div>
    );
}

export default GameList;
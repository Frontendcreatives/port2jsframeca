import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";


function GameItem({ id, name, background_image, rating, released }) {
   
	return (
		  <Card className="cardgame">
			<Card.Img variant="top" className="cardimg" src={background_image} />
                <Card.Body>
				    <Card.Title><h3>{name}</h3></Card.Title>
                    <Card.Title><h5>Rating:</h5>{rating}</Card.Title>
                    <Card.Title><h5>Released:</h5>{released}</Card.Title>
                    <Link to={"/game/" + id}>
					   <Button variant="info" className="cardbtn"> View More </Button>
				    </Link>
                </Card.Body>
            </Card>
	);
}

GameItem.propTypes = {
    id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	background_image: PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired,
    released:PropTypes.string.isRequired
};

export default GameItem;



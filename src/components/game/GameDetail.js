import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import { API } from "../../constants/API";
import {Card} from "react-bootstrap";


function GameDetail() {
    const [data, setData] = useState({});
    const apiKey = "?key=32d6ab81e3c54b0288ba59ab2d4e116c"
    let { id } = useParams();
    const gameUrl = API + "/" + id + apiKey;
    
 

    useEffect(() => {
        getGameDetails();
  }, []);
   
    
const getGameDetails = async () => {
    
  const res = await fetch(gameUrl);
  const resData = await res.json();
  setData(resData);   
};
   
    console.log(data);
    
  return (
  <Row>
      <Col sm={12} md={12}>
		 <Card className="gamedetail">
			<Card.Img variant="top"  src={data.background_image_additional} />
                <Card.Body>
				    <Card.Title><h1>{data.name}</h1> </Card.Title>
                    <Card.Text>{data.description_raw}</Card.Text>
                    <a target="_blank" rel="noreferrer" href={data.website}>VISIT GAME WEBSITE</a>
                </Card.Body>
            </Card>
     
       </Col>
    </Row>
	);
   
}
    


export default GameDetail;
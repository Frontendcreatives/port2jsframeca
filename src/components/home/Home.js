import React from "react";
import Heading from "../layout/Heading";
import GameList from "../game/GameList";

 function Home() {
	return (
		<div className="padding">
			<Heading content="RAWG VIDEO GAMES"/>
			<GameList />
		</div>
	);
}

export default Home;
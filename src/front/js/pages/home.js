import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

//COMPONENTS
import Card from "../component/card.js";

function Home() {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadingData("planets");
		actions.loadingData("people");
	}, []);
	console.log("PEOPLE", store.people);
	console.log("PLANETS", store.planets);
	console.log("FAVORITE", store.favorite);
	return (
		<div>
			<div className="container">
				<div className="characters">
					<h2 className="my-3 font-weight-bold">Characters</h2>
					<div className="row row-cols-1 row-cols-md-3">
						{store.people.map((character, index) => {
							return (
								<Card
									key={index}
									name={character.name}
									labelText1={"Gender: "}
									labelText2={"Eye Color: "}
									labelText3={"Hair Color: "}
									text1={character.gender}
									text2={character.eye_color}
									text3={character.hair_color}
									id={index}
									section="character"
									item={character}
								/>
							);
						})}
					</div>
				</div>
				<div className="container">
					<div className="planets">
						<h2 className="my-3 font-weight-bold">Planets</h2>
						<div className="row row-cols-1 row-cols-md-3">
							{store.planets.map((planets, index) => {
								return (
									<Card
										key={index}
										name={planets.name}
										labelText1={"Population: "}
										labelText2={"Terrain: "}
										text1={planets.population}
										text2={planets.terrain}
										id={index}
										section="planets"
										item={planets}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Home;

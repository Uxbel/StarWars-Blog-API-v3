import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import imgSize800x600 from "../../img/imgSize800x600.png";

export const MoreInfo = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const [DataInfo, setDataInfo] = useState("");
	useEffect(() => {
		if (params.section == "character") {
			setDataInfo(store.people[params.id]);
			console.log(DataInfo, "del if");
		} else {
			setDataInfo(store.planets[params.id]);
			console.log(DataInfo, "del else");
		}
	}, []);

	if (params.section == "character") {
		return (
			<div className="container">
				<div className="row border-dark border-bottom pb-3">
					<div className="col-sm mt-3 p-1">
						<img
							src={imgSize800x600}
							width="540"
							alt="starwars logo"
							className="img-fluid rounded mx-auto d-block"
						/>
					</div>
					<div className="col-sm p-1">
						<h1 className="my-3 font-weight-bold text-center">{DataInfo.name}</h1>
						<p className="text-center m-3">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
							ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						</p>
					</div>
				</div>
				<div className="row my-3">
					<div className="col-sm d-flex flex-column text-center">
						<h4>
							<strong>Name</strong>
						</h4>
						<p>{DataInfo.name}</p>
					</div>
					<div className="col-sm d-flex flex-column text-center">
						<h4>
							<strong>Birth Year</strong>
						</h4>
						<p>{DataInfo.birth_year}</p>
					</div>
					<div className="col-sm d-flex flex-column text-center">
						<h4>
							<strong>Gender</strong>
						</h4>
						<p>{DataInfo.gender}</p>
					</div>
					<div className="col-sm d-flex flex-column text-center">
						<h4>
							<strong>Height</strong>
						</h4>
						<p>{DataInfo.height}</p>
					</div>
					<div className="col-sm d-flex flex-column text-center">
						<h4>
							<strong>Skin Color</strong>
						</h4>
						<p>{DataInfo.skin_color}</p>
					</div>
					<div className="col-sm d-flex flex-column text-center">
						<h4>
							<strong>Eye Color</strong>
						</h4>
						<p>{DataInfo.eye_color}</p>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="container">
				<div className="row border-dark border-bottom pb-3">
					<div className="col-sm mt-3 p-1">
						<img
							src={imgSize800x600}
							width="540"
							alt="starwars logo"
							className="img-fluid rounded mx-auto d-block"
						/>
					</div>
					<div className="col-sm p-1">
						<h1 className="my-3 font-weight-bold text-center">{DataInfo.name}</h1>
						<p className="text-center m-3">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
							ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						</p>
					</div>
				</div>
				<div className="row my-3">
					<div className="col-sm d-flex flex-column text-center">
						<h4>
							<strong>Name</strong>
						</h4>
						<p>{DataInfo.name}</p>
					</div>
					<div className="col-sm d-flex flex-column text-center">
						<h4>
							<strong>Climate</strong>
						</h4>
						<p>{DataInfo.climate}</p>
					</div>
					<div className="col-sm d-flex flex-column text-center">
						<h4>
							<strong>Population</strong>
						</h4>
						<p>{DataInfo.population}</p>
					</div>
					<div className="col-sm d-flex flex-column text-center">
						<h4>
							<strong>Orbital Period</strong>
						</h4>
						<p>{DataInfo.orbital_period}</p>
					</div>
					<div className="col-sm d-flex flex-column text-center">
						<h4>
							<strong>Rotation Period</strong>
						</h4>
						<p>{DataInfo.rotation_period}</p>
					</div>
					<div className="col-sm d-flex flex-column text-center">
						<h4>
							<strong>Diameter</strong>
						</h4>
						<p>{DataInfo.diameter}</p>
					</div>
				</div>
			</div>
		);
	}
};

export default MoreInfo;

import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import starWars from "../../img/star-wars.png";
import * as bootstrap from "bootstrap";
import { element } from "prop-types";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [dropdown, setDropdown] = useState(false);
	const openCloseDropdown = () => {
		setDropdown(!dropdown);
	};

	useEffect(() => {}, [store.favorite]);
	return (
		<nav className="navbar sticky-top navbar-light bg-light mb-3">
			<div className="container d-flex justify-content-between">
				<a className="navbar-brand" href="/">
					<img src={starWars} width="180" alt="starwars logo" />
				</a>
				<div className="dropdown m-2">
					<button
						type="button"
						className="btn btn-lg btn-dark rounded-pill dropdown-toggle"
						data-bs-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites &nbsp;
						<span className="badge badge-dark">
							<i className="far fa-heart" /> {store.favorite.length}
						</span>
					</button>
					<div className="dropdown-menu dropdown-menu-right">
						{console.log(store.people)}
						{store.favorite &&
							store.favorite.map((element, index) => {
								return (
									<div className="dropdown-item d-flex justify-content-between text-wrap" key={index}>
										<p className="m-2">{element.name}</p>
										<button
											onClick={() => {
												actions.deleteFavorite(element.name);
											}}
											type="button"
											className="m-2 border-0 bg-transparent">
											<i className="far fa-trash-alt" />
										</button>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</nav>
	);
};

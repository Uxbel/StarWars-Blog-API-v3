import React from "react";
import { Link } from "react-router-dom";
import imgSize from "../../img/imgSize.png";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

export const Planets = () => {
	return (
		<div className="container">
			<h1 className="my-3 font-weight-bold">Planets</h1>

			<div className="row row-cols-1 row-cols-md-3">
				<div className="col mb-4">
					<div className="card h-100 shadow-sm bg-white rounded">
						<img src={imgSize} className="card-img-top" alt="..." />
						<div className="card-body ">
							<h3 className="card-title font-weight-bold">Alderaan</h3>
							<ul className="list-unstyled">
								<li>
									<strong>Population: </strong>
									20000000000
								</li>
								<li>
									<strong>Terrain: </strong>
									grasslands, mountains
								</li>
							</ul>
							<div className="row d-flex flex-row">
								<div className="col">
									<button type="button" className="btn btn-dark rounded-pill mt-1">
										<strong>Learn More</strong>
									</button>
								</div>
								<div className="col d-flex flex-row-reverse">
									<button type="button" className="btn btn-dark rounded-pill border-0">
										<i className="far fa-heart" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col mb-4">
					<div className="card h-100 shadow-sm bg-white rounded">
						<img src={imgSize} className="card-img-top" alt="..." />
						<div className="card-body ">
							<h3 className="card-title font-weight-bold">Alderaan</h3>
							<ul className="list-unstyled">
								<li>
									<strong>Population: </strong>
									20000000000
								</li>
								<li>
									<strong>Terrain: </strong>
									grasslands, mountains
								</li>
							</ul>
							<div className="row d-flex flex-row">
								<div className="col">
									<button type="button" className="btn btn-dark rounded-pill mt-1">
										<strong>Learn More</strong>
									</button>
								</div>
								<div className="col d-flex flex-row-reverse">
									<button type="button" className="btn btn-dark rounded-pill border-0">
										<i className="far fa-heart" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col mb-4">
					<div className="card h-100 shadow-sm bg-white rounded">
						<img src={imgSize} className="card-img-top" alt="..." />
						<div className="card-body ">
							<h3 className="card-title font-weight-bold">Alderaan</h3>
							<ul className="list-unstyled">
								<li>
									<strong>Population: </strong>
									20000000000
								</li>
								<li>
									<strong>Terrain: </strong>
									grasslands, mountains
								</li>
							</ul>
							<div className="row d-flex flex-row">
								<div className="col">
									<button type="button" className="btn btn-dark rounded-pill mt-1">
										<strong>Learn More</strong>
									</button>
								</div>
								<div className="col d-flex flex-row-reverse">
									<button type="button" className="btn btn-dark rounded-pill border-0">
										<i className="far fa-heart" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col mb-4">
					<div className="card h-100 shadow-sm bg-white rounded">
						<img src={imgSize} className="card-img-top" alt="..." />
						<div className="card-body ">
							<h3 className="card-title font-weight-bold">Alderaan</h3>
							<ul className="list-unstyled">
								<li>
									<strong>Population: </strong>
									20000000000
								</li>
								<li>
									<strong>Terrain: </strong>
									grasslands, mountains
								</li>
							</ul>
							<div className="row d-flex flex-row">
								<div className="col">
									<button type="button" className="btn btn-dark rounded-pill mt-1">
										<strong>Learn More</strong>
									</button>
								</div>
								<div className="col d-flex flex-row-reverse">
									<button type="button" className="btn btn-dark rounded-pill border-0">
										<i className="far fa-heart" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

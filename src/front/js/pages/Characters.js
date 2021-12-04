import React from "react";
import { Link } from "react-router-dom";
import imgSize from "../../img/imgSize.png";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

export const Characters = () => {
	return (
		<div className="container">
			<h1 className="my-3 font-weight-bold">Characters</h1>

			<div className="row row-cols-1 row-cols-md-3">
				<div className="col mb-4">
					<div className="card h-100 shadow-sm bg-white rounded">
						<img src={imgSize} className="card-img-top" alt="..." />
						<div className="card-body ">
							<h3 className="card-title font-weight-bold">Luke Skywalker</h3>
							<ul className="list-unstyled">
								<li>
									<strong>Gender: </strong>
									male
								</li>
								<li>
									<strong>Hair Color: </strong>
									blond
								</li>
								<li>
									<strong>Eye-Color: </strong>
									blue
								</li>
							</ul>
							<div className="row d-flex flex-row">
								<div className="col">
									<Link to={"MoreInfo"}>
										<button type="button" className="btn btn-dark rounded-pill mt-1">
											<strong>Learn More</strong>
										</button>
									</Link>
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
							<h3 className="card-title font-weight-bold">Luke Skywalker</h3>
							<ul className="list-unstyled">
								<li>
									<strong>Gender: </strong>
									male
								</li>
								<li>
									<strong>Hair Color: </strong>
									blond
								</li>
								<li>
									<strong>Eye-Color: </strong>
									blue
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
							<h3 className="card-title font-weight-bold">Luke Skywalker</h3>
							<ul className="list-unstyled">
								<li>
									<strong>Gender: </strong>
									male
								</li>
								<li>
									<strong>Hair Color: </strong>
									blond
								</li>
								<li>
									<strong>Eye-Color: </strong>
									blue
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
							<h3 className="card-title font-weight-bold">Luke Skywalker</h3>
							<ul className="list-unstyled">
								<li>
									<strong>Gender: </strong>
									male
								</li>
								<li>
									<strong>Hair Color: </strong>
									blond
								</li>
								<li>
									<strong>Eye-Color: </strong>
									blue
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

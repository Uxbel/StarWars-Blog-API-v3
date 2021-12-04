import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import imgSize from "../../img/imgSize.png";
import { Context } from "../store/appContext";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Link } from "react-router-dom";

function Card(props) {
	const { store, actions } = useContext(Context);
	const [selected, setSelected] = useState({
		heart: "far fa-heart"
	});

	return (
		<div className="col mb-4">
			<div className="card h-100 shadow-sm bg-white rounded">
				<img src={imgSize} className="card-img-top" alt="..." />
				<div className="card-body ">
					<h3 className="card-title font-weight-bold">{props.name}</h3>
					<ul className="list-unstyled">
						<li>
							<strong>{props.labelText1} </strong>
							{props.text1}
						</li>
						<li>
							<strong>{props.labelText2} </strong>
							{props.text2}
						</li>
						<li>
							<strong>{props.labelText3} </strong>
							{props.text3}
						</li>
					</ul>
					<div className="row d-flex flex-row">
						<div className="col">
							<Link to={"/" + props.section + "/" + props.id}>
								<button type="button" className="btn btn-dark rounded-pill mt-1">
									<strong>Learn More</strong>
								</button>
							</Link>
						</div>
						<div className="col d-flex flex-row-reverse">
							<button
								type="button"
								className="btn btn-dark rounded-pill border-0"
								id="heart"
								onClick={() => {
									actions.addFavorite(props.item);
								}}>
								{store.favorite.includes(props.item) ? (
									<i className="fas fa-heart" />
								) : (
									<i className="far fa-heart" />
								)}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	name: PropTypes.string,
	labelText1: PropTypes.string,
	labelText2: PropTypes.string,
	labelText3: PropTypes.string,
	text1: PropTypes.string,
	text2: PropTypes.string,
	text3: PropTypes.string,
	id: PropTypes.number,
	section: PropTypes.string,
	item: PropTypes.object
};

export default Card;

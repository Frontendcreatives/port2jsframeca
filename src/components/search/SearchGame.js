import React from "react";
import PropTypes from "prop-types";
import {InputGroup} from "react-bootstrap";
import {FormControl} from "react-bootstrap";

function Src({ handleSrc }) {
	return (
		<InputGroup className="search">
			<FormControl placeholder="Search game..." onChange={event => handleSrc(event)} />
		</InputGroup>
	);
}

Src.propTypes = {
	handleSrc: PropTypes.func.isRequired
};

export default Src;
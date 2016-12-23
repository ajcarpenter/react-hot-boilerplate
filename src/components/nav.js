import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';

import Logo from './logo';

export default class Nav extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<div className="nav">
				<Logo />
			</div>
		);
	}
};

Nav.contextTypes = {

};
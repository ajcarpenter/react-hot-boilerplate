import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

export default class Logo extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		const classes = classNames('logo');

		return (
			<h1 className={ classes }>
				<Link className="logo__link" to={'/'}>
					<span className="logo__text">My App</span>
					<img className="logo__image" src="" />
				</Link>
			</h1>
		);
	}
};
import React from 'react';
import { Link } from 'react-router';

export default class Breadcrumbs extends React.Component {

	render() {
		const { breadcrumbs, withSelf } = this.props;
		return <ul className="breadcrumbs">
			{
				breadcrumbs.map((breadcrumb, index) => 
					<li className="breadcrumbs__item" key={ index }>
						<Link className="breadcrumbs__link" to={ breadcrumb.to }>{ breadcrumb.label }</Link>
					</li>
				)
			}
		</ul>
	}
}
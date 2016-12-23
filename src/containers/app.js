import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router';
import Helmet from 'react-helmet';

import Nav from '../components/nav';

class App extends Component {
	constructor(props, context) {
		super(props, context);
	}


	componentDidMount() {

	}

	render() {
		const { children } = this.props;

		return (
			<div className="app">
				<Helmet 
					meta= {[
						{ charset: "utf-8" },
						{ "http-equiv": "x-ua-compatible", content: "ie=edge" },
						{ name: "description", content: "My Lovely App" },
						{ name: "viewport", content: "width=device-width, initial-scale=1" }
					]}
					link= {[
						{ rel: "stylesheet", href: "/static/styles/main.css" }
					]}
					defaultTitle="My App"
					titleTemplate="My App | %s"
				/>
				<Nav />
				<div>
					{ children }
				</div>
			</div>
		)
	}
}


function mapStateToProps(state) {
	return {

	}
}

export default connect(
	mapStateToProps
)(App)
//----- React Components --------
var React = require("react");
import { Redirect } from "react-router";

//----- My Container Components -------
var InputForm = require("./InputForm");

//TitleContainer, containing website title and additional InputForm component for use wherever user is on the site
class TitleContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			citystate: null,
			fireRedirect: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(citystate) {
		this.setState(function() {
			return {
				citystate: citystate,
				fireRedirect: true
			};
		});
	}

	render() {
		var fireRedirect = this.state.fireRedirect;
		var theURL = "/forecast?citystate=" + this.state.citystate;

		return (
			<div className="TitleContainer">
				<h1>ReactWeatherApp</h1>
				<InputForm
					key="title_input"
					flexdir="row"
					buttontext="Get Weather"
					onSubmit={this.handleSubmit}
				/>
				{fireRedirect && <Redirect exact to={theURL} key='from-title' />}
			</div>
		);
	}
}

//make it available
module.exports = TitleContainer;

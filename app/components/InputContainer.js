//----- React Components --------
var React = require("react");
import { Redirect } from "react-router";

//----- My Container Components -------
var InputForm = require("./InputForm");

//InputContainer, which should be the first page a user is presented with when initially visiting the site
class InputContainer extends React.Component {
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
			<div className={"InputContainer"}>
				<InputForm
					key="main_input"
					flexdir="column"
					buttontext="Get Weather"
					onSubmit={this.handleSubmit}
				>
					Enter a City or State
				</InputForm>
				{fireRedirect && <Redirect exact to={theURL} key='from-main' />}
			</div>
		);
	}
}

//make it available
module.exports = InputContainer;

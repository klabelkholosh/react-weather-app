//----- React Components --------
var React = require("react");

//----- My Container Components -------
var InputForm = require("./InputForm");

//TitleContainer, containing website title and additional InputForm component for use wherever user is on the site
class TitleContainer extends React.Component {
	render() {
		return (
			<div className="TitleContainer">
				<h1>ReactWeatherApp</h1>
				<InputForm flexdir="row" />
			</div>
		);
	}
}

//make it available
module.exports = TitleContainer;

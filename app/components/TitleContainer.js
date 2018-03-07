//----- React Components --------
var React = require("react");

//----- My Container Components -------
var InputForm = require("./InputForm");

class TitleContainer extends React.Component {
	render() {
		return (
			<div className="TitleContainer">
				<h1>Clever Text</h1>
				<InputForm flexdir="row" />
			</div>
		);
	}
}

module.exports = TitleContainer;

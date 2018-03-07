//----- React Components --------
var React = require("react");

//----- My Container Components -------
var InputForm = require("./InputForm");

//InputContainer, which should be the first page a user is presented with when initially visiting the site
class InputContainer extends React.Component {
	render() {
		return (
			<div className={"InputContainer"}>
				<InputForm flexdir="column">Enter a City or State</InputForm>
			</div>
		);
	}
}

//make it available
module.exports = InputContainer;

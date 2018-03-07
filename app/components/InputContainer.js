//----- React Components --------
var React = require('react');

//----- My Container Components -------
var InputForm = require('./InputForm');

class InputContainer extends React.Component {
	render() {
		return (
			<div className={'InputContainer'}>
				<InputForm
					flexdir='column'
				>
					Enter a City or State
				</InputForm>
			</div>
		)
	}
}

module.exports = InputContainer;
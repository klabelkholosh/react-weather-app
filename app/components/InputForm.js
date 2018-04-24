//----- React Components --------
var React = require("react");
var Link = require("react-router-dom").Link;
var PropTypes = require("prop-types");
var NavLink = require("react-router-dom").NavLink;

//InputForm that takes in user's typed city/state string and sends it to the forecast route
class InputForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			citystate: ""
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	//ensure city/state state is exactly what user has typed
	handleChange(event) {
		let value = event.target.value;
		this.setState(function() {
			return {
				citystate: value
			};
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.onSubmit(
			this.state.citystate
		)
	}

	render() {
		return (
			<div>
				<form
					className={
						this.props.flexdir === "column"
							? "columnForm"
							: "rowForm"
					}
					onSubmit={this.handleSubmit}
				>
					<h1>{this.props.children}</h1>
					<input
						id="citystate"
						placeholder="St. George, Utah"
						autoComplete="off"
						className="if_input"
						onChange={this.handleChange}
					/>
					<button type='submit' className="if_button">{this.props.buttontext}</button>
				</form>
			</div>
		);
	}
}

InputForm.propTypes = {
	flexdir: PropTypes.string,
	onSubmit: PropTypes.func.isRequired,
	citystate: PropTypes.string.isRequired,
	buttontext: PropTypes.string
};

InputForm.defaultProps = {
	flexdir: "column",
	buttontext: "Submit"
};

//make it available
module.exports = InputForm;

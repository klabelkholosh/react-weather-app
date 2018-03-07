//----- React Components --------
var React = require("react");
var Link = require("react-router-dom").Link;
var PropTypes = require("prop-types");
var NavLink = require("react-router-dom").NavLink;

class InputForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			citystate: ""
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		let value = event.target.value;
		this.setState( function () {
			return {
				citystate: value
			}
		});
	}

	render() {

		var forecastLink = "/forecast?citystate=" + this.state.citystate;

		return (
			<div>
				<form
					className={
						this.props.flexdir === "column"
							? "columnForm"
							: "rowForm"
					}
				>
					<h1>{this.props.children}</h1>
					<input
						id="citystate"
						placeholder="St. George, Utah"
						autoComplete="off"
						className="if_input"
						onChange={this.handleChange}
					/>
					<NavLink exact to={forecastLink}>
						<button className="if_button">Get Weather</button>
					</NavLink>
				</form>
			</div>
		);
	}
}

InputForm.propTypes = {
	flexdir: PropTypes.string
};

InputForm.defaultProps = {
	flexdir: "column"
};

module.exports = InputForm;

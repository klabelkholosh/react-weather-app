//----- React Components --------
var React = require("react");

class Details extends React.Component {
	render() {
		return ( 
				<div>
					<ul className='details_ul'>
						<li><img src={this.props.location.state.icon} /></li>
						<li>{this.props.location.state.datedesc}</li>
						<li>{this.props.location.state.citystate}</li>
						<li>{this.props.location.state.description}</li>
						<li>min temp: {this.props.location.state.mintemp}</li>
						<li>max temp: {this.props.location.state.maxtemp}</li>
						<li>humidity: {this.props.location.state.humidity}</li>
					</ul>
				</div> 
			);
	}
}

module.exports = Details;

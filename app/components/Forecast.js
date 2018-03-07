//----- React Components --------
var React = require("react");
var PropTypes = require("prop-types");

//----- 3rd Party Components ------
var queryString = require("query-string");
var Link = require("react-router-dom").Link;

//----- My Container Components -------
var Api = require("./../utils/Api");
var Loading = require('./Loading');

//sfc Item - weather icon and date
function ForecastListItem(props) {
	return (
		<ul className="fli_ul">
			<li><img src={props.icon} /></li>
			<li>{props.date}</li>
		</ul>
	);
}

//Forecast List - parent list of items, running across the page
class ForecastList extends React.Component {

	render() {

		function getDate(the_date) {
			var workingdate = new Date(the_date);
			var options = { weekday: 'short', month: 'long', day: 'numeric', hour: '2-digit' };
			return workingdate.toLocaleDateString('en-UK', options);
		}

		var citystate = this.props.citystate;
		var iconURL = "";
		var sendDate = "";
		var detailsLink = "";

		return (
			<ul className="fl_ul">
				{this.props.items.map(function(item) {
					console.log(item);
					iconURL = "http://openweathermap.org/img/w/" + item.weather[0].icon + ".png";
					sendDate = getDate(item.dt_txt);
					detailsLink = {
							pathname: "/details",
							state: {
								citystate: citystate,
								description: item.weather[0].description,
								mintemp: item.main.temp_min,
								maxtemp: item.main.temp_max,
								humidity: item.main.humidity,
								icon: iconURL,
								datedesc: sendDate
							}
						}

					return (
						<li>
							<Link exact to={detailsLink}>
								<ForecastListItem
									date={sendDate}
									icon={iconURL}
									key={item.dt_txt}
								/>
							</Link>
						</li>
					);
				})}
			</ul>
		);
	}
}

//main component
class Forecast extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			fiveDays: null,
			results_list: null,
			citystate: queryString.parse(this.props.location.search).citystate
		};

	}

	componentDidMount() {
		this.getFiveDays(this.state.citystate);
	}

	getFiveDays(citystate) {
		Api.fiveDay(citystate).then(
			function(results) {
				this.setState(function() {
					return {
						results_list: results.data.list
					};
				});
			}.bind(this)
		);
	}

	render() {
		return (
			<div className='forecast-container'>
				<h1>{this.state.citystate}</h1>
				{!this.state.results_list 
					? <Loading />
					: <ForecastList
						items={this.state.results_list}
						key={this.state.results_list}
						citystate={this.state.citystate}
					  />
				}
			</div>
		);
	}
}

//make it available
module.exports = Forecast;

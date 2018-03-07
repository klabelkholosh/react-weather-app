//----- React Components --------
var React = require("react");
var ReactRouter = require("react-router-dom");
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

//----- My Container Components -------
var TitleContainer = require("./TitleContainer");
var InputContainer = require("./InputContainer");
var Forecast = require("./Forecast");
var Details = require("./Details");

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="container">
					<TitleContainer />
					<Switch>
						<Route exact path="/" component={InputContainer} />
						<Route exact path="/forecast" component={Forecast} />
						<Route exact path="/details" component={Details} />
						<Route
							render={function() {
								return <div>Not found.</div>;
							}}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}

module.exports = App;

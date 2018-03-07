//----- React Components --------
var React = require("react");
var ReactDOM = require("react-dom");

//----- My Components --------
var App = require("./components/App");

//----- Stylin' --------
require("./index.css");

ReactDOM.render(<App />, document.getElementById("app"));

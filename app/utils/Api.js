var React = require("react");
var Axios = require("axios");

//my api key... hmm.
const _APIKEY = "f14652fffa94ad7ef04fe2468a6a9da4";

//if we have an issue, return null to caller
function handleError(error) {
	return null;
}

//make it available, plus functionality!
module.exports = {
	fiveDay: function(citystate) {
		var encodedURI = encodeURI(
			"https://api.openweathermap.org/data/2.5/forecast?q=" +
				citystate +
				"&appid=" +
				_APIKEY
		);

		return Axios.get(encodedURI)
			.then(function(response) {
				return response;
			})
			.catch(handleError);
	}
};

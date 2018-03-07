var React = require("react");
var Axios = require("axios");

const apiKey = "f14652fffa94ad7ef04fe2468a6a9da4";

module.exports = {
	fiveDay: function(citystate) {
		var encodedURI = encodeURI(
			"https://api.openweathermap.org/data/2.5/forecast?q=" +
				citystate +
				"&appid=" +
				apiKey
		);

		return Axios.get(encodedURI).then(function(response) {
			return response;
		});
	}
};

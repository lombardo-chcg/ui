"use strict";

angular.module("DataHouseApp")
	.service("dataService", function($http) {

		this.fetchData = (callBack) => {
			$http.get("../../mock_data/MOCK_DATA.json")
				.then(callBack);
		}

		this.getAverage = (collection) => {
			var total = collection.reduce( (reducer, currentReading) => {
				return reducer + parseInt(currentReading.score);
			}, 0)
			return Math.round(total / collection.length)
		}

	})
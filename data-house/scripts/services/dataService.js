"use strict";

angular.module("DataHouseApp")
	.service("dataService", function($http) {

		this.fetchData = function(callBack) {
			$http.get("../../mock_data/MOCK_DATA.json")
				.then(callBack);
		}

	})
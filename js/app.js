var appAngular = angular.module('appAngular', []);

appAngular.factory('factoryPessoa', ['$q', '$http', function($q, $http){

	return {
		getPessoa: function(){

			var defer = $q.defer();

			$http.get('/pessoa').success(function(data){
                
                defer.resolve(data);
            
            });

			return defer.promise;

		}
	};
}])

var myApp = myApp || {};

myApp.getPessoa =  function(){

	var fnSuccess, fnError;

	var request = new XMLHttpRequest();

	request.open('GET','/pessoa', true);

	request.send();

	request.addEventListener("load", function(data) {  
		fnSuccess(data);
	}, false);

	request.addEventListener("error", function() {  
		fnError('error');
	}, false);

	return {
		then: function(success, error){
			fnSuccess = success;
			fnError = error;
		}
	}
};
var appAngular = angular.module('appAngular', []);

appAngular.factory('factoryPessoa', ['$q', function($q){

	return {
		getPessoa: function(){

			var defered = $q.defer();

			defered.resolve({nome: 'Renan', idade: 23});

			return defered.promise;

		}
	};
}])

var myApp = myApp || {};

myApp.getPessoa =  function(){

	var fnSuccess, fnError;

	var request = new XMLHttpRequest();

	request.open('GET','https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest', true);

	request.send();

	request.addEventListener("load", function() {  
		fnSuccess({nome: 'Renan', idade: 23});
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
'use strict';

describe('Promise - ', function(){

	var scope, facPessoa;

	beforeEach(function(){

		module('appAngular');

		inject(function(factoryPessoa){
			facPessoa = factoryPessoa;
		});

	});

	beforeEach(inject(function($rootScope) {
    	scope = $rootScope.$new();        
	}));

	it('Deve retornar objeto pessoa com nome "Renan" e idade "23"', function(){

		var pessoa;

		runs(function(){

			myApp.getPessoa().then(function(data){
				pessoa = data;

			});

		});

		waitsFor(function(){
			return pessoa;
		});

		runs(function(){
			expect(pessoa).not.toBeUndefined();
			expect(23).toEqual(pessoa.idade);
		});

	});

	it('Deve retornar objeto pessoa da fábrica com nome "Renan" e idade "23"', function(){

		var pessoa;

		runs(function(){
			facPessoa.getPessoa().then(function(data){
				pessoa = data;
			});

			scope.$apply();
		})

		waitsFor(function(){
			return pessoa;
		});

		runs(function(){
			expect(pessoa).not.toBeUndefined();
			expect(23).toEqual(pessoa.idade);
		})

	})

});
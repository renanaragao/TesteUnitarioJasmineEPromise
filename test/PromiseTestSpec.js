'use strict';

describe('Promise - ', function(){

	var scope, 
        facPessoa, 
        server,
        httpBackend;

	beforeEach(function(){

		module('appAngular');

		inject(function(factoryPessoa){
			facPessoa = factoryPessoa;
		});

	});

	beforeEach(inject(function($rootScope, $httpBackend) {
    	scope = $rootScope.$new();  
        
        httpBackend = $httpBackend;
        
        httpBackend.when('GET', '/pessoa').respond({nome: "Renan", idade: 23});
        
        server = sinon.fakeServer.create();
        
        server.respondWith('GET', '/pessoa', JSON.stringify({nome: "Renan", idade: 23}));
        
        
	}));
    
    afterEach(function(){
        
        server.restore();
        
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    
    });

	it('Deve retornar objeto pessoa com nome "Renan" e idade "23" - Com XMLHttpRequest', function(){

        var result;
        
		myApp.getPessoa().then(function(data){
        
            result = data;
            
        });

        server.respond();
        
        var pessoa = JSON.parse(result.target.response);
        
        expect(result.target.method).toEqual('GET');
        expect(result.target.url).toEqual('/pessoa');
        expect(pessoa.nome).toEqual('Renan');
        
	});

	it('Deve retornar objeto pessoa da fábrica com nome "Renan" e idade "23" - Angular Mocks', function(){

		var pessoa;
        
        var spy = jasmine.createSpy('spy');

		facPessoa.getPessoa().then(function(data){
            pessoa = data;
        });

        httpBackend.flush();
        
        expect(pessoa.nome).toEqual('Renan');

	});

});
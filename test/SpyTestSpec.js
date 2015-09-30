describe('Spy Pessoa - ', function(){
    
    it("Deve notificar os observadores se a propriedade 'nome' foi alterada", function(){
        
        var observer = { notificar: function(){} };
        
        spyOn(observer, 'notificar');
        
        var pessoa = new Pessoa(observer);
        
        pessoa.nome = "Renan";
        
        expect(observer.notificar).toHaveBeenCalled();
        
    });
    
    it("Deve notificar os observadores se a propriedade 'nome' foi alterada, informando o novo nome", function(){
        
        var observer = { notificar: function(){} };
        
        spyOn(observer, 'notificar');
        
        var pessoa = new Pessoa(observer);
        
        pessoa.nome = "Carlos";
        
        expect(observer.notificar).toHaveBeenCalledWith("O novo nome é: 'Carlos'");
        
    });
    
});
var Pessoa = Pessoa || function(observer){
    
    var self = this;
    
    var nome = '';
    
    Object.defineProperties(self, {
        
        'nome': {
            
            get: function(){
            
                return nome;
                
            },
            set: function(valor){
                
                nome = valor;
                
                observer.notificar("O novo nome é: '" + nome + "'");
            
            }
        
        }
        
    })

};
var pessoa = {
    nome: 'João',
    idade: 20,
    cpf: '123.456.789.10',
    ola: function() {
        console.log("Olá, meu nome é " + this.nome);
    }
}
 
pessoa.ola();
 
//Factory Funtions
function Carro(modelo, cor, dono){
    this.modelo = modelo;
    this.cor = cor;
    this.dono = dono;
    this.ligar = function() {
        console.log("O carro " + this.modelo + " está ligado.");
    }
 
}
var carro = new Carro('Fusca', 'Azul', 'João');
carro.ligar();
 
//Prototype objects
function Animal(especie, nome) {
    this.especie = especie;
    this.nome = nome;
}
Animal.prototype.emitirSom = function(){
    console.log(this.nome + " está emitindo som.");
}
var cachorro = new Animal('CACHORRO', 'Rex');
var gato = new Animal('gato', 'Mingau');
 
cachorro.emitirSom();
gato.emitirSom();
 
//object creat
var carro2 = Object.create(carro);
carro2.modelo = 'Fiat';
carro2.cor = 'Branco';
carro2.dono = 'João';
 
carro2.ligar();
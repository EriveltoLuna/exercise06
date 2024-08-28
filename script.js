// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
// Crie um método no objeto, que mostre o seu nome completo

const personalData = {
  name: "erivelto",
  surname: "filho",
  completeName() {
    return `${this.name} ${this.surname}`;
  },
};

console.log(personalData.completeName());

// Modifique o valor da propriedade preco para 3000

var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

const dog = {
  man: true,
  breed: "labrador",
  color: "black",
  age: 10,
  bark() {
    if (this.man) {
      return "bark!";
    } else {
    }
  },
};

console.log(dog.bark());

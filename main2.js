let age = 25;
let year = 2889;
let nome = "Peter";

console.log(age, year);

age = 189;

console.log(age);

const pont = 20;

console.log(pont);

console.log();

const hello = `Hello there my name is ${nome}, I am ${age} and I am from the future, precisely the year ${year}`;

console.log(hello.split(", "));

// Arrays - they are structures that hold multiple values
const numbers =new Array(1,2,3,4,5,6,7,8,9);
console.log(numbers);

const frutas = ["Laranja", "Manga", "Maça", "Banana"];
//adicionar no fim do array
frutas.push("Tangerina");
console.log(frutas);

//adicionar no inicio do array
frutas.unshift("Uva");
console.log(frutas);
//eliminar elementos do array
frutas.pop()
//objectos
const pessoa = {
    Nome: 'Guifty',
    Apelido: "Ananias",
    Idade: 21,
    Hobbies:["Jogos","Filmes","Series","Animes"],
    endereco: {
        Bairro:"Magoanine A",
        Cidade:"Maputo"
    
    }

}

console.log(pessoa.Hobbies[2]);

const { Nome, Apelido} = pessoa;
console.log(Nome);

const tarefas = [
    {
        id:1,
        texto:"conversar",
        completo:true
    },
    {
        id:2,
        texto:"estudar",
        completo:true
    },
    {
        id:3,
        texto:"jogar",
        completo:false
    }
]
console.log(tarefas[1].texto);

const tarefaJSON = JSON.stringify(tarefas);
console.log(tarefaJSON);

/*ciclo for
for (let i = 0; i < 11; i++){
    console.log(`For Loop Number ${i}`);
}
//while loop
let i = 0;
while(i<11) {
    console.log(`For While Number ${i}`);
    i++;
}

for (let i = 0; i < tarefas.length; i++){
    console.log(tarefas[i].texto);
}

for (let tarefa of tarefas) {
    console.log(tarefa.texto);
}
*/
/*tarefas.forEach(function(tarefa) {
    console.log(tarefa.texto)
});

const tarefaTexto =tarefas.map(function(tarefa) {
    return tarefa.texto;
});

console.log(tarefaTexto);
const tarefacompleto =tarefas.filter(function(tarefa) {
    return tarefa.completo=== true;
}).map(function(tarefa){
    return tarefa.texto;
})

console.log(tarefacompleto);
*/
//condiçõoes e switch case

/*let x = 10;
let y = 19;
if (x === 10){
    console.log("É igual a 10");
} else if(x > 10){
    console.log("É maior que 10")
} 
else {
    console.log("É menor que 10")
}

if (x < 5 && y > 10){
    console.log(" it works")
}
 let x = 10;
const cor = x ===10 ? "Azul": "Vermelho";
console.log(cor);

switch (cor) {
    case "Azul":
        console.log("Verdade")
        break;
    case "Vermelho":
        console.log("Falso")
        break;
    default:
        break;
}*/
// Funções
function addnum(num1, num2) {
    return num1+num2;   
}
console.log(addnum(5,10));

const addnum2 = (num1,num2) => num1+num2;
console.log(addnum2(5,16));

tarefas.forEach((todo => console.log(todo.texto)));

// Função Construtor
function Pessoa(Nomea, Apelidoa,DdN) {
    this.Nomea=Nomea;
    this.Apelidoa=Apelidoa;
    this.DdN= new Date(DdN);
    /*this.getNomeCompleto= function(){
        return `${Nomea} ${Apelidoa}`
    }*/
}

Pessoa.prototype.getNomeCompleto = function(){
    return `${this.Nomea} ${this.Apelidoa}`;
}

class Pessoa2 {
    constructor(Nomea, Apelidoa,DdN){
        this.Nomea=Nomea;
        this.Apelidoa=Apelidoa;
        this.DdN= new Date(DdN);
    }
    getNomeCompleto(){
        return `${Nomea}${this.Apelidoa}`
    }
}
//instancia do objecto pessoa
const pessoa1 = new Pessoa("Guifty","Ananias","5-04-2000");
console.log(pessoa1);
console.log(pessoa1.getNomeCompleto())

const pessoa2 = new Pessoa2("Guifty","Ananias","5-04-2000");
console.log(pessoa2);

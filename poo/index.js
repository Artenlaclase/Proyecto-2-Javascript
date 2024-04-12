/* Crear encuestas 
votar encuesta 
contar votos 
mostrar resultados */

class Encuesta {   
    constructor(question, options,answer) {
        this.question = question;
        this.options = options;
        this.answer = answer;

    }

    mostrarQuestion () {}

    votar () {}

    mostrarResult () {}

} 

// Creando preguntas y alternativas
let questions = []
let n = 2;
let a = 4;
for (let i = 0; i < n; i++) {
    let question = prompt (`Ingrese la pregunta ${i +1}:`);
    let numOptions = parseInt( prompt ("Ingrese el número de alternativas:  "));
    // buscar forma de cautelar que el numero de alternativas sea 2 y maximo a

    let options = [];
    for (let j = 0; j < numOptions; j++) {
        options.push (prompt(`Ingrese la alternativa ${j + 1}:` ));

    }
    questions.push (new Encuesta (question, options));

}
console.log(questions);



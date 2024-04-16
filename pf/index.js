//Codigo Paradigma Funcional

//Funcion para crear una encusta 

function crearEncuesta(question,options) {
    const answers = new Array(options.length).fill(0); // Respuestas en 0

    //Función para mostrar la pregunta 
    function mostraQuestion(){
        console.log(question);
        options.forEach.((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });
    }

    //Función para votar 
    function votar() {
        alert ("luego de revisar la consola");
        let answer = prompt("Ingrese el número de la opción desea votar:");
        answer = parseInt(answer);
        if (isNaN(answer) || answer < 1 || answer > options.length) {
            console.log("opción no valida. Debe ingresar un numero entre 1 y " + options.length);
            votar();
        } else {
            answers(answer - 1)++; // Incrementar votos
            console.log("voto registrado ");

        }
    }

    // Función para mostrar los resultados 
    function mostrarResult() {
        console.log("Resultado de la votacion:");
        options.forEach((option, index) => {
            console.log(`${index +1}. ${option}: ${answers[index]} votos `);

        })
    }
    
    // Función para realizar la encuesta
    function realizarEncuesta(numVotantes) {
        for (let i = 0; i < numVotantes; i++){
            console.log(`\nPersona ${i + 1}`);
            mostraQuestion();
            votar();
        }
    }
}
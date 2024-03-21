
//Calculando o IMC
//let -> Não permite que a variável seja "redeclarada" e só funciona dentro do seu escopo
//const -> Semelhante ao let com uma observação: NÃO PODE TER SEU VALOR ALTERADO

//Formula - imc = peso/ (altura*altura)

const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const btnCalcular = document.querySelector('#btn-calcular');
const contentIMC = document.querySelector('.content-imc');
const resultIMC = document.querySelector('.result-imc');
const btnRefazer = document.querySelector('#btn-refazer');


const infoResult = document.querySelector('.result-imc h2 span');
const classResult = document.querySelector('.result-imc p span');


//"cor" (parâmetro), poderia ser qlq outro nome, representa a cor chamada no momento da função
function colorIMC(cor){

    classResult.style.color = cor;
    infoResult.style.color = cor;

}


btnCalcular.addEventListener('click', function () {

    //Se peso e altura for diferente de vazio
    /*
    == comparação de igualdade
    != comparação de diferença
    && e
    || ou
    
    
    */
    if (peso.value != '' && altura.value != '') {


        //Alternando a classe "show"
        contentIMC.classList.toggle('show');
        resultIMC.classList.toggle('show');

        let valorPeso = parseFloat(peso.value);
        let valorAltura = parseFloat(altura.value);

        let imc = valorPeso / (valorAltura * valorAltura);
        //alert(imc);


        //se tivesse mais de um para mudar span precisaria de uma variavel ou ir repetindo e alterando
        //document.querySelector('.result-imc h2 span').innerHTML = imc.toFixed(2); //to fixed, casas decimais / innerHtml >> mexe no texto no hmtl

       

        infoResult.innerHTML = imc.toFixed(2);

        


        /*
        
        && E
        || OU
        <= Menor igual
        >= Maior igual

        */

        if (imc < 18.5) {
            classResult.innerHTML = 'MAGREZA';
            colorIMC('red');
            
        }

        else if (imc >= 18.5 && imc < 24.9) {
            classResult.innerHTML = 'NORMAL';
            colorIMC('green');

        }

        else if (imc >= 25 && imc < 29.9) {
            classResult.innerHTML = 'SOBREPESO';
            colorIMC('yellow');

        }

        else if (imc >= 30 && imc < 39.9) {
            classResult.innerHTML = 'OBESIDADE';
            colorIMC('orange');

        }

        else {

            classResult.innerHTML = 'OBESIDADE GRAVE';
            colorIMC('red');
        }

    }

    else {

        alert('Preencha os campos para calcular')

    }

})




btnRefazer.addEventListener('click', function () {

    resultIMC.classList.toggle('show');
    contentIMC.classList.toggle('show');

    //consegue limpar cada campo, fazendo ele assumir vazio
    peso.value = '';
    altura.value = '';

    /* reset - limpa todos os campos do formulário (como só tem 1, pode colocar form, se tivesse mais id)

    document.querySelector('form').reset();    


*/

})






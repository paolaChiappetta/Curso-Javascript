let wordRequest = "mesa";
let wordResponse = "";
let flag = true;
let firstTry = true;

do{

    if(firstTry){
        wordResponse = prompt("Adiviná la palabra! Ingresá una palabra en singular y en minúsculas");
    }else{
        wordResponse = prompt("Incorrecta, no es " + wordResponse + ". Intenta con otra palabra.");
    }

    if(wordRequest === wordResponse){
        alert("Felicitaciones! Has acertado la palabra.");
        flag = false;
    }

    firstTry = false;

}while(flag);
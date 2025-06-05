// Funções

//Função tradicional
function saudacao(nome : string): string{
    return `Ola, ${nome}`
}
console.log(saudacao('Camila'));

//Arrow function
const soma = (x: number, y:number): number => x + y;
console.log('soma: ', soma(2,3))

//Função com valor padrão
function mensagem(texto: string = 'Bem vindo(a)'){
    console.log(texto);
}

//Função com parametro opcional
function apresentar(nome?: string){
    if (nome){
        console.log(`Ola, ${nome}`);
}
    else{
        console.log(`Ola, visitante`);
}
}
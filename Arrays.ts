//  ARRAYS E METODOS DE MANIPULAÇÃO

let notas: number[] = [6,7.5,8,5];

//forEach
//Realiza a iteração de coleções como arrays ou lista
notas.forEach(n => console.log('Nora', n));

//map
//Cria um novo array com os resultados da chamada de uma função fornecida
let notasAjustadas = notas.map(n => n + 0.5);

//filter
let aprovados = notas.filter(n => n >= 6);

//push e pop
notas.push(10); //adiciono um elemento no final do array
notas.pop(); //remover um elemento do final do array
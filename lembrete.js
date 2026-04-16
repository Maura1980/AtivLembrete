/* TAREFA*/

//Logica Principal: configurar readline, criar variáveis globais (vetor de lembretes), e executar.
// Módulos:
// * Executar o menú com as opcões
// * Adicionar perguntas o lembretes e prazo e adicionar um objeto com essas informações 
// (lembrete, prazo, concluido) no vetor.//
// * Listar: verificar se tem algum lembrerte cadastro, se tiver, listar usando forEach.
// * Editar: listar, selecionar um lembrete, perguntar as novas informações do lembrete, e salvar na posição
// * Marcar como Concluido: listar, selecionar um lembrete e marcar como concluido como true.



const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout,
});

let lembretes = [];

function executar(){
console.log("\n===== MENU ====");
console.log("1. Adiconar lembrete");
console.log("2. Listar lembretes");
console.log("3. Editar lembretes");
console.log("4. Marcar como concluído");
console.log("5. Sair");

rl.question("Escolha uma opção:", (opcao) => {
    switch (opcao) {
        case "1":
            adicionar();
            break;
        case "2":
            listar();
            break;
        case "3":
            editar();
            break;
        case "4":
            marcarConcluido();
            break;
        case "5":
            console.log("Saindo...");
            rl.close();
            break;
            default:
            console.log("Opção invalida");
            executar();
        }
    });
}

function adicionar(){
    rl.question("Digite o lembrete:", (texto) => {
        rl.question("Digite o prazo:", (prazo) => {
            let novo = {
                lembrete: texto,
                prazo: prazo,
                concluido: false
            };
      

        lembretes.push(novo);
        console.log("Lembrete Adicionado");
        executar();
    });
  });
}

function listar() {
    if(lembretes.length === 0) {
        console.log("Não há lembretes.");
    }else{
        console.log("\n Lista de lembretes:");
        lembretes.forEach((item, index) => {
            console.log(`
                ${index}.${item.lembrete}|Prazo:${item.prazo}|concluido:${item.concluido}
            `);
        });
    }
    executar();
}

function editar(){
    if(lembretes.length === 0){
        console.log("Não há lembrete para editar.");
        return executar();
    }
listarSemMenu();
rl.question("Selecione o indice para editar:",(index) => {
    if(lembrete[index]) {
        rl.question("Novo Prazo:", (novoPrazo) =>{
            lembretes[index].lembrete = novoTexto;
            lembretes[index].prazo = novoPrazo;
            console.log("Lembrete atualizado");
            executar();
        });
    }else{
    console.log(`indice inválido`);
executar();
        }
    });
}
function marcarConcluido(){
if (lembrete.length === 0){
console.log("Não há lembretes.");
return executar();
}

listarSemMenu();
rl.question("Selecione o indice para marcar como concluido:",(index) => {
if (lembretes[index].concluido = true){
consolo.log("Lembrete marcado como concluido");
}else{
    console.log("indice invalido");
}
    executar();
});
}

function listarSemMenu() {
console.log("*Lembretes:");
lembretes.forEach((item, index) =>{
    console.log(`${index} .${item. lembrete}|Prazo:$(item.prazo}|Concluido:${item.concluido}
    `);
 });
}

executar()


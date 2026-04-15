const readline = require('readline')

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

const lembretes = [];

function menu() {
    console.log('<<<LEMBRETES>>>');
    console.log('1. Adicionar lembrete');
    console.log('2. Numerar lembrete');
    console.log('3. Editar lembrete');
    console.log('4. Marcar como concluido');
    console.log('5. Sair');

    rl. question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                adicionar();
                break;
            
            case '2':
                numerar();
                break;
            
            case '3':
                editar();
                break;

            case '4':
                marcarConcluido();
                break;

            case '5':
                console.log('Saindo...');
                rl.close();
                break;

            default:
                executar();
        }
    })
}

funtion adicionar() {
    rl.question('Digite o lembrete: ', (texto) => {
        rl.question('Digite o prazo', (prazo) => {
            const novoLembrete = {
                lembrete: texto,
                prazo: prazo,
                concluido: false
            };
            lembretes.push(novoLembrete);
            console.log('Lembrete adicionado com sucesso!');
            executar();


        });

    
    });
}

funtion listar() {
     if (lembretes.length === 0){
        console.log("Não existem lembretes cadastrados!");
        voltarMenu();
    } else {
        console.log('===Lista de Lembretes===');
        lembretes.forEach(item,index) => {
         console.log(
            ${index}. ${item.lembrete} | prazo
         )
        }
        voltarMenu();
    }
};











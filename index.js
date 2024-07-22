const prompt = require("prompt-sync")();

const {
  adicionarAtividade,
  listarAtividade,
  atualizarAtividade,
  removerAtividade,
} = require("./atividades");

const exibirMenu() => {
    while (true) {
        console.log("\n O que você fez nas férias? ");
        console.log("1. Adicionar atividade");
        console.log("2. Listar todas as atividades");
        console.log("3. Atualizar uma atividade");
        console.log("4. Remover atividade");
        console.log("5. Sair");
      
        let escolha = prompt("Escolha uma opção: ");


        switch (escolha)) {
            case 1:
                const diaAdd = prompt('digite o dia da atividade (dd/mm/aa):');
                const atividadeAdd = prompt('digite a ativiade realizada:');
                adicionarAtividade(diaAdd,atividadeAdd);
                console.log("Atividade adicionada com sucesso! :)")
                break;
            
            case 2:
                console.log("\nLista de Atividades:")
                listarAtividade();                
                break;
            case 3:
                const indexAtualizar
        
            default:
                break;
        }
    }
}
    


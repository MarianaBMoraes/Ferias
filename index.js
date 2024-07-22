const prompt = require("prompt-sync")();

const {
  adicionarAtividades,
  listarAtividades,
  atualizarAtividade,
  deletarAtividade,
} = require("./modulos");

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

                
                break;
        
            default:
                break;
        }
    }
}

               adicionarCarro();
                break;
            case '2':
                removerCarro();
                break;
            case '3':
                listarCarros();
                break;
            case '4':
                atualizarCarro();
                break;
            case '5':
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida.");
    


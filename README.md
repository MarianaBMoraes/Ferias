### README

#### Gerenciador Simples de Tarefas Realizadas Nas Férias

Este aplicativo em Node.js oferece um sistema básico de gerenciamento de tarefas onde os usuários podem criar, atualizar, remover, listar tarefas e sair do programa.

#### Uso

1. **Configuração**
   - Certifique-se de ter o Node.js instalado em sua máquina.

2. **Instalação**
   - Clone o repositório ou faça o download dos arquivos diretamente.

3. **Executando o Aplicativo**
   - Navegue até o diretório que contém `index.js` e `atividades.js`.
   - Abra um terminal e execute `node index.js`.

4. **Funcionalidades**
   - Ao executar `index.js`, você será apresentado a um menu:
     ```
     O que deseja fazer?
     1 - Criar
     2 - Atualizar
     3 - Remover
     4 - Listar
     5 - Sair
     ```
   - Digite o número correspondente à ação desejada:
     - **1**: Criar uma nova tarefa.
     - **2**: Atualizar uma tarefa existente.
     - **3**: Remover uma tarefa.
     - **4**: Listar todas as tarefas.
     - **5**: Sair do programa.

5. **Criando uma Tarefa**
   - Ao criar uma tarefa, digite o dia da tarefa e, em seguida, liste o que foi feito naquele dia até digitar 'acabou' para finalizar.

6. **Atualizando e Removendo Tarefas**
   - Ao atualizar ou remover uma tarefa, você será solicitado a selecionar a tarefa pelo seu índice conforme mostrado na lista.

7. **Listando Tarefas**
   - Lista todas as tarefas armazenadas atualmente, exibindo cada dia e as atividades associadas a ele.

8. **Saindo**
   - Escolha a opção 5 no menu para sair do programa.

#### Módulos

- **index.js**: Controla o fluxo principal do aplicativo, apresentando o menu e interagindo com o usuário.
  
- **atividades.js**: Contém funções para criar, atualizar, remover e listar tarefas (`criar`, `atualizar`, `remover`, `listar`). As tarefas são armazenadas em um array `atividades` e cada tarefa consiste em um dia e uma lista de atividades.

#### Notas

- Certifique-se de manipular as entradas com cuidado conforme as solicitações para evitar comportamentos inesperados.
- Este aplicativo é destinado para fins educacionais, demonstrando operações básicas de CRUD (Criar, Ler, Atualizar, Deletar) em um ambiente de linha de comando.

#### Dependências

- Este aplicativo utiliza `prompt-sync` para manipulação síncrona de entrada em Node.js.

#### Autor

- Desenvolvido por [Mariana Moraes](https://github.com/MarianaBMoraes).
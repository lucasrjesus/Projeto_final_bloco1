import { Input } from "./src/util/Input";
import { Colors } from "./src/util/Colors";
import { ProdutoController } from "./src/controller/ProdutoController";
import { Produto } from "./src/model/Produto";
import { Carne } from "./src/model/Carne";
import { Bebida } from "./src/model/Bebida";

export function main() {

  const produtos = new ProdutoController();
  produtosTeste(produtos);
  let opcao: number;
  let id: number;
  let tipo: number;
  let preco: number;
  let peso: number;
  let nome: string;
  let litragem: number;

  let tipoProduto = ["Carne", "Bebida"];

  while (true) {

    console.log(Colors.bg.black, Colors.fg.red);
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("                 Açougue Carne Boa                  ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("        1 - Criar Produto                            ");
    console.log("        2 - Listar todos os Produtos                 ");
    console.log("        3 - Buscar Produto por ID                    ");
    console.log("        4 - Atualizar Dados do Produto               ");
    console.log("        5 - Deletar Produto                          ");
    console.log("        0 - Sair                                     ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log(Colors.reset);

    console.log("Entre com a opção desejada: ");
    opcao = Input.questionInt("");

    if (opcao === 0) {
      console.log(Colors.fg.brightBlue, "\nAçougue Carne Boa - Preço Baixo é Aqui!");
      console.log(Colors.reset);
      sobre();
      process.exit(0);
    }

    switch (opcao) {

      case 1:
        console.log(Colors.fg.whitestrong, "\n\nCriar Produto\n", Colors.reset);

        nome = Input.question("Digite o Nome do Produto: ");
        tipo = Input.keyInSelect(tipoProduto, "Selecione o tipo do Produto:", { cancel: false }) + 1;
        preco = Input.questionFloat("Digite o preco: ");

        switch (tipo) {
          case 1:
            peso = Input.questionFloat("Digite o peso (KG): ");
            produtos.cadastrar(
              new Carne(produtos.gerarId(), nome, tipo, preco, peso)
            );
            break;

          case 2:
         litragem = Input.questionFloat("Digite a capacidade (em litros): ");
         produtos.cadastrar(new Bebida(produtos.gerarId(), nome, tipo, preco, litragem)    );
    break;
        }

        keyPress();
        break;

      case 2:
        console.log(Colors.fg.whitestrong, "\n\nListar todos os Produtos\n", Colors.reset);
        produtos.listarTodas();
        keyPress();
        break;

      case 3:
        console.log(Colors.fg.whitestrong, "\n\nBuscar Produto por ID\n", Colors.reset);
        id = Input.questionInt("Digite o ID do produto: ");
        produtos.procurarPorId(id);
        keyPress();
        break;

      case 4:
       case 4:
         console.log(Colors.fg.whitestrong, "\nAtualizar Dados do Produto\n", Colors.reset);
        id = Input.questionInt("Digite o ID do produto: ");
        let produto = produtos.procurarPorId(id);

  if (produto != null) {
    nome = Input.question("Digite o novo nome do produto: ");
    preco = Input.questionFloat("Digite o novo preco: ");
    tipo = produto;
    switch (tipo) {
      case 1:
        peso = Input.questionFloat("Digite o novo peso (KG): ");
        produtos.atualizar(
          new Carne(id, nome, tipo, preco, peso)
        );
        break; }
  }else{
    console.log("\nProduto não encontrado!");
  }
  keyPress();
  break;
      case 5:
        console.log(Colors.fg.whitestrong, "\n\nDeletar Produto\n", Colors.reset);
        id = Input.questionInt("Digite o ID do produto: ");
        produtos.deletar(id);
        keyPress();
        break;

      default:
        console.log(Colors.fg.whitestrong, "\nOpção Inválida!\n", Colors.reset);
        keyPress();
        break;
    }
  }
}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Lucas Ribeiro de Jesus - lrj.lucasribeiro@gmail.com");
    console.log("github.com/lucasrjesus");
    console.log("*****************************************************");
}

/* Função de pausa entre as opções do menu */
function keyPress(): void {
    console.log(Colors.reset,"\nPressione enter para continuar...");
    Input.prompt();
}

// Função de teste 
function produtosTeste(produtos: ProdutoController): void {

    produtos.cadastrar(new Carne(produtos.gerarId(), "Picanha Angus Black", 1, 129.90, 1.2));
    produtos.cadastrar(new Carne(produtos.gerarId(), "Maminha Grill", 1, 59.90, 1.5));
    produtos.cadastrar(new Carne(produtos.gerarId(), "Alcatra Peça", 1, 69.90, 2.0));
    produtos.cadastrar(new Carne(produtos.gerarId(), "Linguiça Toscana", 1, 25.90, 1.0));
    produtos.cadastrar(new Carne(produtos.gerarId(), "Coxa de Frango", 1, 18.50, 3.0));
    produtos.cadastrar(new Bebida(produtos.gerarId(), "Fanta Laranja", 2, 12.00, 2));

}


main();
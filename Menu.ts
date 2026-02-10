import { Input } from "./src/util/Input";
import { Colors } from "./src/util/Colors";


export function main() {

    let opcao: number;

    while (true) {

        console.log(Colors.bg.black, Colors.fg.red, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                Açougue Carne Boa                    ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Produto                        ");
        console.log("            2 - Listar todas os Produtos             ");
        console.log("            3 - Buscar Produto por ID                ");
        console.log("            4 - Atualizar Dados do Produto           ");
        console.log("            5 - Deletar Produto                       ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        Colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = Input.questionInt("");

        if (opcao === 0) {
            console.log(Colors.fg.brightBlue, "\nAçougue Carne Boa - Preço Baixo é Aqui!");
            sobre();
            console.log(Colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(Colors.fg.whitestrong, "\n\nCriar Produto\n\n", Colors.reset);
                
                keyPress()
                break;
            case 2:
                console.log(Colors.fg.whitestrong, "\n\nListar todas os Produtos\n\n", Colors.reset);

                keyPress()
                break;
            case 3:
                console.log(Colors.fg.whitestrong, "\n\nBuscar Produto por ID\n\n", Colors.reset);

                keyPress()
                break;
            case 4:
                console.log(Colors.fg.whitestrong, "\n\nAtualizar Dados do Produto\n\n", Colors.reset);

                keyPress()
                break;
            case 5:
                console.log(Colors.fg.whitestrong, "\n\nDeletar Produto\n\n", Colors.reset);

                keyPress()
                break;
            default:
                console.log(Colors.fg.whitestrong, "\nOpção Inválida!\n", Colors.reset);

                keyPress()
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

main();
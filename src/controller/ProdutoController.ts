import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../../repository/ProdutoRepository";
import { Colors } from "../util/Colors";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Array<Produto> = new Array<Produto>();
    public id: number = 0;

    procurarPorId(id: number): void {
        const buscaProduto = this.buscarNoArray(id);

        if (buscaProduto !== null) {
            buscaProduto.visualizar();
        } else {
            console.log(Colors.fg.red, `A carne com ID ${id} não foi encontrada`, Colors.reset);
        }
    }

    listarTodas(): void {
        if (this.listaProdutos.length === 0) {
            console.log(Colors.fg.magentastrong, "\nO estoque do açougue está vazio!", Colors.reset);
        } else {
            for (let produto of this.listaProdutos) {
                produto.visualizar();
            }
        }
    }

    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log(Colors.fg.green, "\nA Carne foi cadastrada com sucesso!", Colors.reset);
    }

    atualizar(produto: Produto): void {
        const buscaProduto = this.buscarNoArray(produto.id);

        if (buscaProduto !== null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log(Colors.fg.green, `A carne com ID ${produto.id} foi atualizada com sucesso!` , Colors.reset);
        } else {
            console.log(Colors.fg.red, `A carne com ID ${produto.id} não foi encontrada!`, Colors.reset);
        }
    }

    deletar(id: number): void {
        const buscaProduto = this.buscarNoArray(id);

        if (buscaProduto !== null) {
            // Remove o produto da lista (splice)
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log(Colors.fg.green, "\nA Carne com ID " + id + " foi apagada com sucesso!", Colors.reset);
        } else {
            console.log(Colors.fg.red, "\nA Carne com o ID " + id + " não foi encontrada!", Colors.reset);
        }
    }

    /* MÉTODOS AUXILIARES (Não obrigatórios na Interface, mas essenciais para funcionar) */

    // Gera um ID novo automaticamente (+1)
    public gerarId(): number {
        return ++this.id;
    }

    // Busca um produto na lista pelo ID (usado pelos outros métodos)
    public buscarNoArray(id: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if (produto.id === id)
                return produto;
        }
        return null;
    }
}
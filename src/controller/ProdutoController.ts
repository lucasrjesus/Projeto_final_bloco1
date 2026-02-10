 import { Produto } from "../model/Produto";
 import { ProdutoRepository } from "../../repository/ProdutoRepository";
 import { Colors } from "../util/Colors";



 export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Array<Produto> = new Array<Produto>();
    public id: number = 0;

    //Implementando Métodos
    procurarPorId(id: number): void {
        const buscaProduto = this.buscarNoArray(id);

        if (buscaProduto !== null) {
            buscaProduto.visualizar();
        }else{
            console.log(Colors.fg.red, `O produto com ID ${id} não foi encontrado`, Colors.reset);
        }
    }

    listarTodas(): void {
        if (this.listaProdutos.length === 0) {
            console.log(Colors.fg.magentastrong, "O estoque do açougue está vazio!", Colors.reset);
        }else{
            for (let produto of this.listaProdutos) {
                produto.visualizar();
            }
        }
    }

    cadastrar(produto: Produto): void {
        produto.id = this.gerarId();
        this.listaProdutos.push(produto);
        console.log(Colors.fg.green, "O produto foi cadastrado com sucesso!", Colors.reset);
    }

    atualizar(produto: Produto): void {
        const buscaProduto = this.buscarNoArray(produto.id);

        if (buscaProduto !== null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log(Colors.fg.green, `O produto com ID ${produto.id} foi atualizado com sucesso!` , Colors.reset);
        }else{
            console.log(Colors.fg.red, `O produto com ID ${produto.id} não foi encontrado!`, Colors.reset);
        }
    } 

    deletar(id: number): void {
        const buscaProduto = this.buscarNoArray(id);
        if (buscaProduto !== null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log(Colors.fg.green, `O produto com ID ${id} foi apagad com sucesso!`, Colors.reset);
        }else{
            console.log(Colors.fg.red, `O produto com ID ${id} não foi encontrado!`, Colors.reset);
        }
    }

    //Metodos Auxiliares
    public gerarId(): number {
        return ++this.id;
    }

    public buscarNoArray(id: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if (produto.id === id)
                return produto;
        } 
        return null;
    }
}
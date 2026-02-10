import { Produto } from "./Produto";

export class Bebida extends Produto {

    private _litragem: number;

    constructor(id: number, nome: string, tipo: number, preco: number, litragem: number) {
        super(id, nome, tipo, preco);
        this._litragem = litragem;
    }

    public get litragem(): number {
        return this._litragem;
    }

    public set litragem(value: number) {
        this._litragem = value;
    }

    public visualizar(): void {
        super.visualizar(); 
        console.log(`Litragem: ${this._litragem}L`);
    }
}
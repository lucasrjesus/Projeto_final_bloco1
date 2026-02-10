
import { Produto } from "./Produto";

export class Carne extends Produto {
    private _peso: number;

    constructor(id: number, nome: string, tipo: number, preco: number, peso: number) {
         super(id, nome, tipo, preco);
        this._peso = peso;
    }

    public get peso(): number {
        return this._peso;
    }

    public set peso(value: number) {
        this._peso = value;
    }

   
    public visualizar(): void {
        super.visualizar(); 
        console.log(`Peso: ${this._peso} Kg`); 
     }
}
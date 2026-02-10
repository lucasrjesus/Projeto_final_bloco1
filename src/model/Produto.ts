import { currencyBr } from "../util/CurrencyBr";
import { Colors } from "../util/Colors";

export abstract class Produto {
    
    private _id: number;
    private _nome: string;
    private _tipo: number; // 1 para Carne, 2 para Bebida/Outro
    private _preco: number;

    constructor(id: number, nome: string, tipo: number, preco: number) {
        this._id = id;
        this._nome = nome;
        this._tipo = tipo;
        this._preco = preco;
    }

  
    public get id() { return this._id; }
    public set id(id: number) { this._id = id; }

    public get nome() { return this._nome; }
    public set nome(nome: string) { this._nome = nome; }

    public get tipo() { return this._tipo; }
    public set tipo(tipo: number) { this._tipo = tipo; }

    public get preco() { return this._preco; }
    public set preco(preco: number) { this._preco = preco; }
   
   
    public visualizar(): void {
      
        console.log(Colors.bg.black, Colors.fg.brightYellow,
             "DADOS DO PRODUTO DO AÇOUGUE");
        console.log(`ID: ${this._id}`);
        console.log(`Nome: ${this._nome}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Preço: ${currencyBr(this._preco)}`);
       
    }
}
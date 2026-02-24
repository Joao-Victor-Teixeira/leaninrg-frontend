export class Pessoa {
    // defino os atributos que caracterizam uma Pessoa
    private id: number;
    private nome: string;
    private salario: number;

    public constructor(id: number, nome: string, salario: number) {
        this.id = id;
        this.nome = nome;
        this.salario = salario;
    }

    public exibir(): void {
        console.log("Pessoa = " + this.id + "/" + this.nome + "/" + this.salario);
    }
}
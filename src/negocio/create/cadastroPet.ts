import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";

export default class CadastroPet {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log(`\nCadastro de Pet`);

        let cpfBusca = this.entrada.receberTexto(`Informe o CPF do dono do Pet: `);
        let cliente = this.clientes.find(c => c.getCpf.getValor === cpfBusca);

        if (!cliente) {
            console.log(`\nCliente com CPF ${cpfBusca} não encontrado.\n`);
            return;
        }

        let nomePet = this.entrada.receberTexto(`Nome do Pet: `);
        let tipo = this.entrada.receberTexto(`Tipo (Ex: cachorro, gato, etc): `);
        let raca = this.entrada.receberTexto(`Raça: `);
        let genero = this.entrada.receberTexto(`Gênero (M/F): `);

        let pet = new Pet(nomePet, raca, genero, tipo);
        cliente.getPets.push(pet);

        console.log(`\nPet ${nomePet} cadastrado com sucesso para o cliente ${cliente.nome}.\n`);
    }
}
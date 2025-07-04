import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";

export default class ListagemPets {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public listar(): void {
        console.log(`\nListagem de Pets de um cliente`);

        let cpfBusca = this.entrada.receberTexto(`Informe o CPF do cliente: `);
        let cliente = this.clientes.find(c => c.getCpf.getValor === cpfBusca);

        if (!cliente) {
            console.log(`\nCliente com CPF ${cpfBusca} não encontrado.\n`);
            return;
        }

        let pets = cliente.getPets;

        if (pets.length === 0) {
            console.log(`\nO cliente ${cliente.nome} não possui pets cadastrados.\n`);
            return;
        }

        console.log(`\nPets do cliente ${cliente.nome}:`);
        pets.forEach((pet: Pet, index: number) => {
            console.log(`\nPet ${index + 1}:`);
            console.log(`Nome: ${pet.getNome}`);
            console.log(`Tipo: ${pet.getTipo}`);
            console.log(`Raça: ${pet.getRaca}`);
            console.log(`Gênero: ${pet.getGenero}`);
        });
        console.log();
    }
}
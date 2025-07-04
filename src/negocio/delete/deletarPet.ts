import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";

export default class ExclusaoPet {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public excluir(): void {
        console.log(`\nExclusão de Pet`);

        let cpfBusca = this.entrada.receberTexto(`Informe o CPF do dono do Pet: `);
        let cliente = this.clientes.find(c => c.getCpf.getValor === cpfBusca);

        if (!cliente) {
            console.log(`\nCliente com CPF ${cpfBusca} não encontrado.\n`);
            return;
        }

        let pets = cliente.getPets;
        if (pets.length === 0) {
            console.log(`\nEsse cliente não tem pets cadastrados.\n`);
            return;
        }

        console.log(`\nPets do cliente ${cliente.nome}:`);
        pets.forEach((pet, i) => {
            console.log(`${i + 1} - ${pet.getNome} (${pet.getTipo}, ${pet.getRaca}, ${pet.getGenero})`);
        });

        let indice = this.entrada.receberNumero(`Escolha o número do pet que deseja excluir: `) - 1;
        if (indice < 0 || indice >= pets.length) {
            console.log(`\nOpção inválida.\n`);
            return;
        }

        let removido = pets.splice(indice, 1);
        console.log(`\nPet ${removido[0].getNome} excluido com sucesso!\n`);
    }
}
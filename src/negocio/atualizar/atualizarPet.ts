import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";

export default class AtualizacaoPet {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public atualizar(): void {
        console.log(`\nAtualização de Pet`);

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

        let indice = this.entrada.receberNumero(`Escolha o número do pet que deseja atualizar: `) - 1;
        if (indice < 0 || indice >= pets.length) {
            console.log(`\nOpção inválida.\n`);
            return;
        }

        let pet = pets[indice];
        console.log(`\nEditando Pet: ${pet.getNome}`);

        let novoNome = this.entrada.receberTexto(`Novo nome (enter para manter): `);
        let novoTipo = this.entrada.receberTexto(`Novo tipo (enter para manter): `);
        let novaRaca = this.entrada.receberTexto(`Nova raça (enter para manter): `);
        let novoGenero = this.entrada.receberTexto(`Novo gênero (enter para manter): `);

        if (novoNome) pet["nome"] = novoNome;
        if (novoTipo) pet["tipo"] = novoTipo;
        if (novaRaca) pet["raca"] = novaRaca;
        if (novoGenero) pet["genero"] = novoGenero;

        console.log(`\nPet atualizado com sucesso!\n`);
    }
}
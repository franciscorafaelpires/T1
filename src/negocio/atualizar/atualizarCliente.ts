import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";

export default class AtualizacaoCliente {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        console.log(`\nAtualização de cliente`);
        let cpfBusca = this.entrada.receberTexto(`Informe o CPF do cliente a ser atualizado: `);

        let cliente = this.clientes.find(c => c.getCpf.getValor === cpfBusca);

        if (cliente) {
            console.log(`Cliente encontrado: ${cliente.nome} (${cliente.nomeSocial})`);

            let novoNome = this.entrada.receberTexto(`Novo nome (deixe vazio para manter): `);
            let novoNomeSocial = this.entrada.receberTexto(`Novo nome social (deixe vazio para manter): `);

            if (novoNome.trim() !== "") {
                cliente.nome = novoNome;
            }
            if (novoNomeSocial.trim() !== "") {
                cliente.nomeSocial = novoNomeSocial;
            }

            console.log(`\nCliente atualizado com sucesso!\n`);
        } else {
            console.log(`\nCliente com CPF ${cpfBusca} não encontrado.\n`);
        }
    }
}
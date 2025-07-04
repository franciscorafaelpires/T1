import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";

export default class ExclusaoCliente {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public excluir(): void {
        console.log(`\nExclusão de cliente`);
        let cpfBusca = this.entrada.receberTexto(`Informe o CPF do cliente a ser excluído: `);

        let index = this.clientes.findIndex(c => c.getCpf.getValor === cpfBusca);

        if (index !== -1) {
            let cliente = this.clientes[index]
            this.clientes.splice(index, 1)
            console.log(`\nCliente ${cliente.nome} removido com sucesso!\n`);
        } else {
            console.log(`\nCliente com CPF ${cpfBusca} não encontrado.\n`);
        }
    }
}
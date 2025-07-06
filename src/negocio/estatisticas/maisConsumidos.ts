import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";

export default class MaisConsumidos {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nListagem geral dos produtos e serviços mais consumidos:`);

        const consumoMap: { [nome: string]: number } = {};

        for (let cliente of this.clientes) {

            for (let produto of cliente.getProdutosConsumidos) {
                consumoMap[produto.nome] = (consumoMap[produto.nome] || 0) + 1;
            }

            for (let servico of cliente.getServicosConsumidos) {
                consumoMap[servico.nome] = (consumoMap[servico.nome] || 0) + 1;
            }
        }


        const ordenado = Object.entries(consumoMap)
            .sort((a, b) => b[1] - a[1]);

        if (ordenado.length === 0) {
            console.log(`Nenhum produto ou serviço foi consumido ainda.\n`);
            return;
        }

        for (let [nome, quantidade] of ordenado) {
            console.log(`${nome} - consumido ${quantidade}x`);
        }

        console.log();
    }
}
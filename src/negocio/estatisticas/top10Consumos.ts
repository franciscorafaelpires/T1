import Cliente from "../../modelo/cliente";

export default class Top10ClientesMaisConsumiram {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nTop 10 clientes que mais consumiram (em quantidade de produtos + serviços):`);

        const ranking = this.clientes.map(cliente => {
            const totalProdutos = cliente.getProdutosConsumidos.length;
            const totalServicos = cliente.getServicosConsumidos.length;
            return {
                cliente,
                total: totalProdutos + totalServicos
            };
        });

        const top10 = ranking
            .sort((a, b) => b.total - a.total)
            .slice(0, 10);

        if (top10.length === 0) {
            console.log("Nenhum cliente com consumo registrado.\n");
            return;
        }

        top10.forEach((entry, index) => {
            console.log(`${index + 1}. ${entry.cliente.nome} - Total consumido: ${entry.total}`);
        });

        console.log();
    }
}
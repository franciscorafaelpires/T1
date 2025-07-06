import Cliente from "../../modelo/cliente";

export default class Top5ClientesMaisGastaram {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nTop 5 clientes que mais consumiram em valor:`);

        const ranking = this.clientes.map(cliente => {
            const totalProdutos = cliente.getProdutosConsumidos.reduce((acc: number, prod: { valor: number; }) => acc + (prod.valor || 0), 0);
            const totalServicos = cliente.getServicosConsumidos.reduce((acc: number, serv: { valor: number; }) => acc + (serv.valor || 0), 0);
            const total = totalProdutos + totalServicos;

            return {
                cliente,
                total
            };
        });

        const top5 = ranking
            .sort((a, b) => b.total - a.total)
            .slice(0, 5);

        if (top5.length === 0) {
            console.log(`Nenhum valor registrado em consumo.\n`);
            return;
        }

        top5.forEach((entry, index) => {
            console.log(`${index + 1}. ${entry.cliente.nome} - R$ ${entry.total.toFixed(2)}`);
        });

        console.log();
    }
}
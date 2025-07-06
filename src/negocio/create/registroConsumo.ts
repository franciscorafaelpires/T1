import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";

export default class RegistroConsumo {
    private clientes: Array<Cliente>;
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public registrar(): void {
        console.log(`\nRegistro de Consumo`);

        const cpfBusca = this.entrada.receberTexto(`Informe o CPF do cliente: `);
        const cliente = this.clientes.find(c => c.getCpf.getValor === cpfBusca);

        if (!cliente) {
            console.log(`\nCliente com CPF ${cpfBusca} não encontrado.\n`);
            return;
        }

        console.log(`\nDeseja registrar:`);
        console.log(`1 - Produto`);
        console.log(`2 - Serviço`);
        const tipo = this.entrada.receberNumero(`Escolha uma opção: `);

        switch (tipo) {
            case 1:
                if (this.produtos.length === 0) {
                    console.log(`\nNenhum produto cadastrado.\n`);
                    return;
                }

                console.log(`\nProdutos disponíveis:`);
                this.produtos.forEach((p, i) => {
                    console.log(`${i + 1} - ${p.nome}`);
                });

                const indiceProduto = this.entrada.receberNumero(`Escolha o número do produto: `) - 1;
                if (indiceProduto >= 0 && indiceProduto < this.produtos.length) {
                    cliente.getProdutosConsumidos.push(this.produtos[indiceProduto]);
                    console.log(`\nProduto registrado no consumo de ${cliente.nome}.\n`);
                } else {
                    console.log(`\nOpção inválida.\n`);
                }
                break;

            case 2:
                if (this.servicos.length === 0) {
                    console.log(`\nNenhum serviço cadastrado.\n`);
                    return;
                }

                console.log(`\nServiços disponíveis:`);
                this.servicos.forEach((s, i) => {
                    console.log(`${i + 1} - ${s.nome}`);
                });

                const indiceServico = this.entrada.receberNumero(`Escolha o número do serviço: `) - 1;
                if (indiceServico >= 0 && indiceServico < this.servicos.length) {
                    cliente.getServicosConsumidos.push(this.servicos[indiceServico]);
                    console.log(`\nServiço registrado no consumo de ${cliente.nome}.\n`);
                } else {
                    console.log(`\nOpção inválida.\n`);
                }
                break;

            default:
                console.log(`\nTipo de consumo inválido.\n`);
        }
    }
}
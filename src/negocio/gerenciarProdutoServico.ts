
import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

type Item = Produto | Servico;

export default class GerenciarProdutoServico {
    private itens: Array<Item>;
    private entrada: Entrada;
    private tipo: string;

    constructor(itens: Array<Item>, tipo: string) {
        this.itens = itens;
        this.tipo = tipo;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log(`\nCadastro de ${this.tipo}`);

        let nome = this.entrada.receberTexto(`Nome do ${this.tipo.toLowerCase()}: `);
        let valor = this.entrada.receberNumero(`Valor do ${this.tipo.toLowerCase()} (R$): `);

        let novoItem: Item;
        if (this.tipo === 'Produto') {
            novoItem = new Produto();
        } else {
            novoItem = new Servico();
        }
        novoItem.nome = nome;
        novoItem.valor = valor;

        this.itens.push(novoItem);
        console.log(`\n${this.tipo} "${nome}" cadastrado com sucesso no valor de R$ ${valor.toFixed(2)}\n`);
    }

    public listar(): void {
        console.log(`\nListagem de ${this.tipo}s:`);

        if (this.itens.length === 0) {
            console.log(`Nenhum ${this.tipo.toLowerCase()} cadastrado.\n`);
            return;
        }

        this.itens.forEach((item, index) => {
            console.log(`${index + 1}. ${item.nome} - R$ ${item.valor.toFixed(2)}`);
        });

        console.log();
    }

    public atualizar(): void {
        console.log(`\nAtualização de ${this.tipo}`);

        if (this.itens.length === 0) {
            console.log(`Nenhum ${this.tipo.toLowerCase()} cadastrado.\n`);
            return;
        }

        this.listar();
        let indice = this.entrada.receberNumero(`Escolha o número do ${this.tipo.toLowerCase()} que deseja atualizar: `) - 1;

        if (indice < 0 || indice >= this.itens.length) {
            console.log(`\nOpção inválida.\n`);
            return;
        }

        let item = this.itens[indice];
        let novoNome = this.entrada.receberTexto(`Novo nome (deixe vazio para manter o nome "${item.nome}"): `);
        let novoValorStr = this.entrada.receberTexto(`Novo valor (deixe vazio para manter o valor R$ ${item.valor.toFixed(2)}): `);

        if (novoNome.trim() !== "") {
            item.nome = novoNome;
        }

        if (novoValorStr.trim() !== "") {
            item.valor = parseFloat(novoValorStr);
        }

        console.log(`\n${this.tipo} atualizado com sucesso!\n`);
    }

    public excluir(): void {
        console.log(`\nExclusão de ${this.tipo}`);

        if (this.itens.length === 0) {
            console.log(`Nenhum ${this.tipo.toLowerCase()} cadastrado.\n`);
            return;
        }

        this.listar();
        let indice = this.entrada.receberNumero(`Escolha o número do ${this.tipo.toLowerCase()} que deseja excluir: `) - 1;

        if (indice < 0 || indice >= this.itens.length) {
            console.log(`\nOpção inválida.\n`);
            return;
        }

        let removido = this.itens.splice(indice, 1);
        console.log(`${this.tipo} "${removido[0].nome}" removido com sucesso!\n`);
    }
}

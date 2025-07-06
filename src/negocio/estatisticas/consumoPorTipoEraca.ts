import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";

export default class ConsumoPorTipoRacaPet {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nListagem dos produtos e serviços mais consumidos por tipo e raça de pet:`);

        // Mapa agrupado por tipo-raca
        const consumoPorPet: {
            [chaveTipoRaca: string]: { [nomeItem: string]: number }
        } = {};

        for (let cliente of this.clientes) {
            const pets = cliente.getPets;

            // Para cada pet, associar os consumos do cliente
            for (let pet of pets) {
                const chave = `${pet.getTipo} | ${pet.getRaca}`;
                if (!consumoPorPet[chave]) {
                    consumoPorPet[chave] = {};
                }

                // Contar produtos
                for (let produto of cliente.getProdutosConsumidos) {
                    const nome = produto.nome;
                    consumoPorPet[chave][nome] = (consumoPorPet[chave][nome] || 0) + 1;
                }

                // Contar serviços
                for (let servico of cliente.getServicosConsumidos) {
                    const nome = servico.nome;
                    consumoPorPet[chave][nome] = (consumoPorPet[chave][nome] || 0) + 1;
                }
            }
        }

        // Exibir resultados
        const chaves = Object.keys(consumoPorPet);
        if (chaves.length === 0) {
            console.log(`Nenhum consumo registrado com pets.\n`);
            return;
        }

        for (let chave of chaves) {
            console.log(`\nTipo/Raça: ${chave}`);
            const itens = consumoPorPet[chave];
            const ordenado = Object.entries(itens).sort((a, b) => b[1] - a[1]);

            for (let [nome, qtd] of ordenado) {
                console.log(`  - ${nome}: ${qtd}x`);
            }
        }

        console.log();
    }
}
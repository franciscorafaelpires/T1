import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import AtualizacaoCliente from "../negocio/atualizar/atualizarCliente";
import AtualizacaoPet from "../negocio/atualizar/atualizarPet";
import CadastroCliente from "../negocio/create/cadastroCliente";
import CadastroPet from "../negocio/create/cadastroPet";
import ConsumoPorTipoRacaPet from "../negocio/estatisticas/consumoPorTipoEraca";
import MaisConsumidos from "../negocio/estatisticas/maisConsumidos";
import Top10ClientesMaisConsumiram from "../negocio/estatisticas/top10Consumos";
import Top5ClientesMaisGastaram from "../negocio/estatisticas/top5Gastos";
import ExclusaoCliente from "../negocio/delete/deletarCliente";
import ExclusaoPet from "../negocio/delete/deletarPet";
import ListagemClientes from "../negocio/read/listagemClientes";
import ListagemPets from "../negocio/read/listagemPet";
import RegistroConsumo from "../negocio/create/registroConsumo";
import GerenciarProdutoServico from "../negocio/gerenciarProdutoServico";

console.log('Bem-vindo ao sistema de gerenciamento de pet shops e clínicas veterinarias')
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log('Opções:');
    console.log('---Cliente---');
    console.log('1 - Cadastrar cliente');
    console.log('2 - Listar todos os clientes');
    console.log('3 - Atualizar cliente');
    console.log('4 - Excluir cliente');
    console.log('---PET---');
    console.log('5 - Cadastrar Pet');
    console.log('6 - Listar Pets de um cliente');
    console.log('7 - Atualizar Pet');
    console.log('8 - Excluir Pet');
    console.log(`---Produto---`);
    console.log(`9 - Cadastrar Produto`);
    console.log(`10 - Listar Produtos`);
    console.log(`11 - Atualizar Produto`);
    console.log(`12 - Excluir Produto`);
    console.log(`---Serviço---`);
    console.log(`13 - Cadastrar Serviço`);
    console.log(`14 - Listar Serviços`);
    console.log(`15 - Atualizar Serviço`);
    console.log(`16 - Excluir Serviço`);
    console.log(`---Estatísticas---`);
    console.log('17 - Registrar consumo de Produto ou Serviço');
    console.log('18 - Listar os 10 clientes que mais consumiram em quantidade');
    console.log('19 - Listar os produtos e serviços mais consumidos');
    console.log('20 - Listar consumo por tipo e raça de pet');
    console.log('21 - Listar os 5 clientes que mais gastaram em valor');
    console.log('0 - Sair');

    let entrada = new Entrada()
    let opcao = entrada.receberNumero('Por favor, escolha uma opção: ')

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let atualizacao = new AtualizacaoCliente(empresa.getClientes);
            atualizacao.atualizar();
            break;

        case 4:
            let exclusao = new ExclusaoCliente(empresa.getClientes);
            exclusao.excluir();
            break;
        case 5:
            const cadastroPet = new CadastroPet(empresa.getClientes);
            cadastroPet.cadastrar();
            break;
        case 6:
            const listagemPets = new ListagemPets(empresa.getClientes);
            listagemPets.listar();
            break;
        case 7:
            const atualizarPet = new AtualizacaoPet(empresa.getClientes);
            atualizarPet.atualizar();
            break;
        case 8:
            const excluirPet = new ExclusaoPet(empresa.getClientes);
            excluirPet.excluir();
            break;
        case 9:
            const gerenciadorProduto = new GerenciarProdutoServico(empresa.getProdutos, 'Produto');
            gerenciadorProduto.cadastrar();
            break;

        case 10:
            const gerenciadorProdutoListar = new GerenciarProdutoServico(empresa.getProdutos, 'Produto');
            gerenciadorProdutoListar.listar();
            break;
        case 11:
            const gerenciadorProdutoAtualizar = new GerenciarProdutoServico(empresa.getProdutos, 'Produto');
            gerenciadorProdutoAtualizar.atualizar();
            break;

        case 12:
            const gerenciadorProdutoExcluir = new GerenciarProdutoServico(empresa.getProdutos, 'Produto');
            gerenciadorProdutoExcluir.excluir();
            break;
        case 13:
            const gerenciadorServico = new GerenciarProdutoServico(empresa.getServicos, 'Serviço');
            gerenciadorServico.cadastrar();
            break;

        case 14:
            const gerenciadorServicoListar = new GerenciarProdutoServico(empresa.getServicos, 'Serviço');
            gerenciadorServicoListar.listar();
            break;

        case 15:
            const gerenciadorServicoAtualizar = new GerenciarProdutoServico(empresa.getServicos, 'Serviço');
            gerenciadorServicoAtualizar.atualizar();
            break;

        case 16:
            const gerenciadorServicoExcluir = new GerenciarProdutoServico(empresa.getServicos, 'Serviço');
            gerenciadorServicoExcluir.excluir();
            break;
        case 17:
            const registroConsumo = new RegistroConsumo(
                empresa.getClientes,
                empresa.getProdutos,
                empresa.getServicos
            );
            registroConsumo.registrar();
            break;
        case 18:
            const top10 = new Top10ClientesMaisConsumiram(empresa.getClientes);
            top10.listar();
            break;
        case 19:
            const maisConsumidos = new MaisConsumidos(empresa.getClientes);
            maisConsumidos.listar();
            break;
        case 20:
            const porTipoRaca = new ConsumoPorTipoRacaPet(empresa.getClientes);
            porTipoRaca.listar();
            break;
        case 21:
            const top5Valor = new Top5ClientesMaisGastaram(empresa.getClientes);
            top5Valor.listar();
            break;

        case 0:
            execucao = false
            console.log('Até mais')
            break;
        default:
            console.log('Operação não entendida :(')
    }
}
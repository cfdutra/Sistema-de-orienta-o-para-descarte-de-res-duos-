// 1. MODELAGEM ORIENTADA A OBJETOS
// Criamos uma Classe para representar os Pontos de Coleta
class PontoDeColeta {
    constructor(nome, endereco, tipoResiduo) {
        this.nome = nome;
        this.endereco = endereco;
        this.tipoResiduo = tipoResiduo; // 'pilha', 'oleo' ou 'eletronico'
    }

    // Método encapsulado para formatar como a informação aparece na tela
    formatarExibicao() {
        return `<strong>${this.nome}</strong><br>📍 ${this.endereco}`;
    }
}

// 2. ESTRUTURA DE DADOS (LISTA)
// Usamos um Array (Lista) para armazenar os objetos instanciados
const listaDeLocais = [
    new PontoDeColeta("Ecoponto Central", "Rua da Sustentabilidade, 123 - Centro", "pilha"),
    new PontoDeColeta("Farmácia Bem Estar", "Av. Principal, 456 - Bairro Alto", "pilha"),
    new PontoDeColeta("Supermercado Bom Preço", "Rua do Comércio, 789 - Zona Sul", "oleo"),
    new PontoDeColeta("Associação de Moradores", "Rua Verde, 321 - Bairro Novo", "oleo"),
    new PontoDeColeta("Tech Recicla", "Polo Industrial, Galpão 4", "eletronico")
];

// 3. LÓGICA DO SISTEMA (Filtragem e Exibição)
function buscarLocais(tipo) {
    const areaResultados = document.getElementById('area-resultados');
    
    // Limpa a tela antes de mostrar novos resultados
    areaResultados.innerHTML = ''; 

    // Filtra a nossa Lista baseada no tipo de resíduo selecionado pelo usuário
    const locaisFiltrados = listaDeLocais.filter(local => local.tipoResiduo === tipo);

    // Validação caso não encontre locais (Melhoria da Etapa 8 do seu mapa)
    if (locaisFiltrados.length === 0) {
        areaResultados.innerHTML = '<p class="mensagem-inicial">Nenhum local encontrado para este resíduo no momento.</p>';
        return;
    }

    // Cria os elementos visuais na tela para cada local encontrado na lista
    locaisFiltrados.forEach(local => {
        const divLocal = document.createElement('div');
        
        // Pequena estilização injetada diretamente via JS para destacar os blocos
        divLocal.style.backgroundColor = '#ffffff';
        divLocal.style.padding = '12px';
        divLocal.style.marginBottom = '10px';
        divLocal.style.borderRadius = '6px';
        divLocal.style.borderLeft = '5px solid #4caf50';
        divLocal.style.color = '#333';
        divLocal.style.textAlign = 'left';
        
        // Puxa o método da nossa Classe para escrever o texto
        divLocal.innerHTML = local.formatarExibicao();
        
        // Joga o bloco pronto dentro da área de resultados do HTML
        areaResultados.appendChild(divLocal);
    });
}
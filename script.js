// MODELAGEM ORIENTADA A OBJETOS
class PontoDeColeta {
    constructor(nome, endereco, tipoResiduo) {
        this.nome = nome;
        this.endereco = endereco;
        this.tipoResiduo = tipoResiduo; 
    }

    formatarExibicao() {
        return `<strong>${this.nome}</strong><br><span style="color: #556658; font-size: 0.95rem; display: inline-block; margin-top: 5px;">📍 ${this.endereco}</span>`;
    }
}

// ESTRUTURA DE DADOS (LISTA COM DADOS REAIS DE MARINGÁ)
const listaDeLocais = [
    // Pilhas e Baterias
    new PontoDeColeta("Atacadão Maringá", "Rua Fernão Dias, 300", "pilha"),
    new PontoDeColeta("Atacadão Maringá", "Avenida Colombo, 67", "pilha"),
    new PontoDeColeta("Sicoob Maringá", "Todas as unidades da cidade", "pilha"),
    new PontoDeColeta("Supermercados Amigão", "Todas as unidades da cidade", "pilha"),

    // Óleo de Fritura
    new PontoDeColeta("Supermercados Amigão", "Todas as unidades da cidade", "oleo"),
    new PontoDeColeta("Paróquia Nossa Senhora de Guadalupe", "Avenida Carlos Borges, 2005", "oleo"),
    new PontoDeColeta("Escolas Municipais", "Verifique a unidade escolar mais próxima", "oleo"),

    // Sucatas Eletrônicas
    new PontoDeColeta("Tiro de Guerra", "Avenida Mandacaru, 730", "eletronico"),
    new PontoDeColeta("4º Batalhão da Polícia Militar", "Rua Mitsuzu Taguchi, 99", "eletronico"),
    new PontoDeColeta("Coopercanção", "Avenida Vereador João Batista Sanches, 1234", "eletronico"),
    new PontoDeColeta("Paço Municipal", "Rua XV de Novembro, 701", "eletronico"),
    new PontoDeColeta("Descarte eletrônico", "Rua Pion Gertrude H. Fritzen, 7115", "eletronico"),

    // Vidros
    new PontoDeColeta("Tiro de Guerra", "Avenida Mandacaru, 730", "vidro"),
    new PontoDeColeta("4º Batalhão da Polícia Militar", "Rua Mitsuzu Taguchi, 99", "vidro"),
    new PontoDeColeta("Paróquia Menino Jesus de Praga", "Rua Monsenhor Kimura, 36", "vidro"),
    new PontoDeColeta("Paróquia Nossa Senhora de Guadalupe", "Avenida Carlos Borges, 2005", "vidro"),
    new PontoDeColeta("Paróquia Santa Isabel de Portugal", "Rua Jalbas Rodrigues Alves, 188", "vidro"),

    // Inservíveis (Móveis e Eletrodomésticos)
    new PontoDeColeta("Ouvidoria Municipal (Agendamento)", "Agende pelo aplicativo 156 Maringá (disponível para Android e iOS), pelo site da Ouvidoria Municipal, ou enviando mensagem para o WhatsApp (44) 99103-2432 com seu nome, endereço e foto do móvel ", "inservivel"),

    // Pneus
    new PontoDeColeta("Supermercados Condor", "Verifique a unidade mais próxima", "pneu"),
    new PontoDeColeta("Reciclanip", "Pontos de coleta credenciados na cidade", "pneu"),

    // Medicamentos
    new PontoDeColeta("Farmácias e Drogarias Locais", "Devolução obrigatória diretamente no estabelecimento comercial onde foram adquiridos", "medicamento"),

    // Lâmpadas
    new PontoDeColeta("Supermercados Mufatto", "Todas as unidades da cidade", "lampada"),
    new PontoDeColeta("Supermercados Amigão", "Todas as unidades da cidade", "lampada")
];

// LÓGICA DO SISTEMA
function buscarLocais(tipo) {
    const areaResultados = document.getElementById('area-resultados');
    
    // Limpa o estado atual
    areaResultados.innerHTML = ''; 

    const locaisFiltrados = listaDeLocais.filter(local => local.tipoResiduo === tipo);

    if (locaisFiltrados.length === 0) {
        areaResultados.innerHTML = '<div class="empty-state"><p>Nenhum local cadastrado para esta categoria no momento.</p></div>';
        return;
    }

    // Renderiza cada ponto de coleta com design fluido
    locaisFiltrados.forEach(local => {
        const divLocal = document.createElement('div');
        
        // Estilização injetada elegante, combinando com o design eco-minimalista
        divLocal.style.backgroundColor = '#ffffff';
        divLocal.style.padding = '18px';
        divLocal.style.marginBottom = '14px';
        divLocal.style.borderRadius = '12px';
        divLocal.style.borderLeft = '6px solid #2e6f40';
        divLocal.style.boxShadow = '0 4px 12px rgba(19, 50, 27, 0.02)';
        divLocal.style.borderTop = '1px solid #f0f4eb';
        divLocal.style.borderRight = '1px solid #f0f4eb';
        divLocal.style.borderBottom = '1px solid #f0f4eb';
        divLocal.style.color = '#1c2b1e';
        divLocal.style.textAlign = 'left';
        divLocal.style.transition = 'transform 0.2s ease';
        
        divLocal.innerHTML = local.formatarExibicao();
        areaResultados.appendChild(divLocal);
    });
}
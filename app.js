// Número real do WhatsApp do Leonardo
const numeroWhatsApp = "556484044871"; 

// Nosso Banco de Dados simples
const imoveis = [
    { 
        id: 1, 
        titulo: "Casa com Varanda Gourmet", 
        bairro: "Residencial Maria José", 
        tipo: "Casa", 
        finalidade: "Venda", 
        quartos: 3, 
        banheiros: 3, 
        area: 180, 
        preco: "R$ 1.450.000,00", 
        imagem: "https://via.placeholder.com/300x200?text=Casa+Maria+Jose" 
    },
    { 
        id: 2, 
        titulo: "Apartamento Sobreloja", 
        bairro: "São João", 
        tipo: "Apartamento", 
        finalidade: "Aluguel", 
        quartos: 2, 
        banheiros: 1, 
        area: 90, 
        preco: "R$ 1.500,00", 
        imagem: "https://via.placeholder.com/300x200?text=Apt+Sao+Joao" 
    },
    { 
        id: 3, 
        titulo: "Sobrado Alto Padrão", 
        bairro: "Portal do Cerrado", 
        tipo: "Sobrado", 
        finalidade: "Venda", 
        quartos: 4, 
        banheiros: 5, 
        area: 370, 
        preco: "R$ 5.700.000,00", 
        imagem: "https://via.placeholder.com/300x200?text=Sobrado+Portal" 
    }
];

// Função que desenha os cards na tela
function renderizarVitrine(listaDeImoveis = imoveis) {
    const container = document.getElementById('container-imoveis');
    container.innerHTML = ''; 

    if (listaDeImoveis.length === 0) {
        container.innerHTML = '<p style="text-align: center; width: 100%; color: #666; font-size: 1.2rem;">Nenhum imóvel encontrado com estes filtros.</p>';
        return;
    }

    listaDeImoveis.forEach(imovel => {
        // Mensagem automática pronta para o cliente enviar
        const textoMensagem = `Olá, Leonardo! Vi no seu site e tenho interesse no imóvel: ${imovel.titulo} (${imovel.tipo}) no bairro ${imovel.bairro}. Valor: ${imovel.preco}. Poderia me passar mais detalhes?`;
        const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoMensagem)}`;

        const cardHTML = `
            <div class="card">
                <img src="${imovel.imagem}" alt="${imovel.titulo}">
                <div class="card-conteudo">
                    <span class="tag-finalidade">${imovel.finalidade}</span>
                    <h3 class="card-titulo">${imovel.titulo}</h3>
                    <p class="card-bairro">📍 ${imovel.bairro}</p>
                    
                    <div class="card-icones">
                        <span>🛏️ ${imovel.quartos}</span>
                        <span>🚿 ${imovel.banheiros}</span>
                        <span>📏 ${imovel.area}m²</span>
                    </div>
                    
                    <p class="card-preco">${imovel.preco}</p>
                    
                    <a href="${linkWhatsApp}" target="_blank" class="btn-detalhes" style="display: block; text-align: center; text-decoration: none;">
                        Falar no WhatsApp
                    </a>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

function filtrarImoveis() {
    const filtroFinalidade = document.getElementById('filtro-finalidade').value;
    const filtroTipo = document.getElementById('filtro-tipo').value;

    const imoveisFiltrados = imoveis.filter(imovel => {
        const atendeFinalidade = (filtroFinalidade === 'Todos') || (imovel.finalidade === filtroFinalidade);
        const atendeTipo = (filtroTipo === 'Todos') || (imovel.tipo === filtroTipo);

        return atendeFinalidade && atendeTipo;
    });

    renderizarVitrine(imoveisFiltrados);
}

renderizarVitrine();

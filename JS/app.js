// ==========================================================
// 1. Templates JavaScript (Conteúdo HTML das "páginas")
// ==========================================================

const templates = {
    // Template para a página INÍCIO (Conteúdo do <main> original do index.html)
    home: `
        <section>
            <h2>Quem somos?</h2>
            <p>Somos uma organização sem fins lucrativos que atua com gatos abandonados ou em situação de rua.</p>
            <img class="centralizar-img" src="../imagens/gatinhos.jpg" alt="Voluntários em ação de resgate de gatos">
        </section>
        <section>
            <h2>Missão da ONG Gatinhos Salvos</h2>
            <p>Promover dignidade e oportunidade de acolhimento aos animais abandonados.</p>
        </section>
        <section>
            <h2>Contato</h2>
            <address>
                <p>Rua Estrela Cadente, 404 - Bairro Esperança Viva - Curitiba/PR</p> 
                <p>Telefone: (41) 96281-0181</p>
                <p>Email: ajuda@gatinhossalvos.org.pt.br</p>
            </address>
        </section>
    `,

    // Template para a página PROJETO (Conteúdo do <main> de projeto.html)
    projeto: `
        <h2>Conheça nosso Projeto</h2>
        <section>
            <h3>Nosso Foco</h3>
            <p>A ONG Gatinhos Salvos concentra seus esforços no resgate, reabilitação e adoção de felinos abandonados em Curitiba e região metropolitana.</p>
            <p>Trabalhamos em parceria com clínicas veterinárias e abrigos para garantir o bem-estar e a saúde de todos os animais resgatados.</p>
        </section>
        <section>
            <h3>Como Ajudamos</h3>
            <ul>
                <li>Resgate e primeiros socorros</li>
                <li>Castração e vacinação</li>
                <li>Busca por lares temporários e definitivos</li>
                <li>Campanhas de conscientização</li>
            </ul>
        </section>
        <img class="centralizar-img" src="../imagens/homem.jpg" alt="Gatos resgatados">
    `,

    // Template para a página CADASTRO (Conteúdo do <main> de cadastro.html)
    cadastro: `
        <h2>Cadastre-se</h2>
        <img class="centralizar-img" src="../imagens/resgatados.jpg" alt="Faça seu cadastro para ajudar">
        <form action="#" method="POST" id="cadastroForm">
            <fieldset>
                <legend>Informações Pessoais</legend>
                <label for="nome">Nome Completo:</label>
                <input type="text" id="nome" name="nome" required minlength="3" placeholder="Seu nome completo">

                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required placeholder="email@exemplo.com">
                
                <label for="dataNascimento">Data de Nascimento:</label>
                <input type="date" id="dataNascimento" name="dataNascimento" required>
                
                <label for="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" required maxlength="14" placeholder="000.000.000-00">
                
                <label for="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone" required maxlength="15" placeholder="(99) 99999-9999">
            </fieldset>

            <fieldset>
                <legend>Endereço</legend>
                <label for="cep">CEP:</label>
                <input type="text" id="cep" name="cep" required maxlength="9" placeholder="00000-000">

                <label for="endereco">Endereço:</label>
                <input type="text" id="endereco" name="endereco" required placeholder="Rua, Av., Número">

                <label for="cidade">Cidade:</label>
                <input type="text" id="cidade" name="cidade" required placeholder="Ex.: São Paulo">

                <label for="estado">Estado:</label>
                <select id="estado" name="estado" required>
                    <option value="" disabled selected>Selecione o Estado</option>
                    <option>SP</option><option>MG</option><option>RJ</option><option>BA</option>
                    <option>PR</option><option>RS</option><option>PE</option><option>CE</option>
                    <option>PA</option><option>SC</option>
                </select>
            </fieldset>

            <button type="submit">Enviar Cadastro</button>
        </form>
    `
};

// ==========================================================
// 2. Lógica do Single Page Application (SPA) e Manipulação do DOM
// ==========================================================

const spaContainer = document.getElementById('spa-container');
const navLinks = document.querySelectorAll('nav a');

// Função principal para carregar o conteúdo da rota
function loadRoute(route) {
    const templateHTML = templates[route] || templates['home']; 
    
    // 1. Manipulação do DOM: Injeta o novo conteúdo
    spaContainer.innerHTML = templateHTML;

    // 2. Atualiza a URL (SPA)
    window.history.pushState({ route: route }, `${route.toUpperCase()} | ONG Gatinhos Salvos`, `/${route}`);
    
    // 3. Opcional: Atualiza o título da página
    document.title = `${route.charAt(0).toUpperCase() + route.slice(1)} | ONG Gatinhos Salvos`;

    // 4. Se a rota for 'cadastro', configura o listener do formulário
    if (route === 'cadastro') {
        setupCadastroForm();
    }
}

// Lógica para lidar com o clique nos links de navegação
function handleNavClick(event) {
    event.preventDefault(); 
    const route = event.target.getAttribute('data-route');
    
    if (route) {
        loadRoute(route);
    }
}

// Lógica para lidar com a navegação do navegador (Voltar/Avançar)
window.addEventListener('popstate', (event) => {
    // Extrai a rota da URL ou volta para 'home'
    const path = window.location.pathname.slice(1) || 'home';
    loadRoute(path);
});


// ==========================================================
// 3. Funcionalidades Avançadas (Ex: Manipulação do Formulário)
// ==========================================================

function setupCadastroForm() {
    const form = document.getElementById('cadastroForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Exemplo de captura de dados
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;

            // Simula uma funcionalidade real (salvando no LocalStorage)
            const userData = { nome, email, timestamp: new Date().toLocaleString() };
            
            // Armazenamento Local: Salva o último usuário cadastrado
            localStorage.setItem('lastUserCadastro', JSON.stringify(userData));

            alert(`Cadastro de ${nome} recebido com sucesso! Dados salvos no Local Storage.`);
            form.reset();
        });
    }
}


// ==========================================================
// 4. Inicialização do SPA
// ==========================================================

// Adiciona os listeners de clique aos links de navegação
navLinks.forEach(link => {
    link.addEventListener('click', handleNavClick);
});

// Determina a rota inicial ao carregar a página
// O SPA verifica a URL atual (ex: /projeto) ou carrega 'home'
const initialRoutePath = window.location.pathname.slice(1) || 'home';
loadRoute(initialRoutePath);
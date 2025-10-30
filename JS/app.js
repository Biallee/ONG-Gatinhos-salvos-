// ==========================================================
// 1. Templates JavaScript (Conteúdo HTML das "páginas")
// ==========================================================

const templates = {
    // Template para a página INÍCIO
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

    // Template PROJETO (AGORA INCLUI O DISPLAY DO LOCAL STORAGE)
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

    // Template CADASTRO
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
// 2. Variáveis Globais e Funções do SPA
// ==========================================================

const spaContainer = document.getElementById('spa-container');
const navLinks = document.querySelectorAll('nav a');


function loadRoute(route) {
    // 1. Acessa o template (e usa 'home' como fallback)
    const templateHTML = templates[route] || templates['home']; 
    
    // 2. Injeta o HTML no container
    spaContainer.innerHTML = templateHTML;

    // 3. Atualiza a URL e Título
    window.history.pushState({ route: route }, `${route.toUpperCase()} | ONG Gatinhos Salvos`, `/${route}`);
    document.title = `${route.charAt(0).toUpperCase() + route.slice(1)} | ONG Gatinhos Salvos`;

    // 4. Configura funcionalidades específicas da rota
    if (route === 'cadastro') {
        setupCadastroForm();
    } else if (route === 'projeto') {
        displayLocalStorageData();
    }
}


function handleNavClick(event) {
    event.preventDefault(); 
    const route = event.target.getAttribute('data-route');
    
    if (route) {
        loadRoute(route);
    }
}


window.addEventListener('popstate', () => {
    const path = window.location.pathname.slice(1) || 'home';
    loadRoute(path);
});


// ==========================================================
// 3. Funcionalidades Avançadas (Local Storage e Formulário)
// ==========================================================

// Função para salvar dados no Local Storage (SET)
function setupCadastroForm() {
    const form = document.getElementById('cadastroForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const userData = {
                nome: document.getElementById('nome').value,
                email: document.getElementById('email').value,
                data: new Date().toLocaleDateString('pt-BR')
            };
            
            localStorage.setItem('lastUserCadastro', JSON.stringify(userData));

            alert(`Cadastro de ${userData.nome} salvo! (Dados persistem no Local Storage)`);
            form.reset();
        });
    }
}

// Função para ler dados do Local Storage e exibir (GET)
function displayLocalStorageData() {
    const displayElement = document.getElementById('local-storage-display');
    if (!displayElement) return;

    const dataString = localStorage.getItem('lastUserCadastro');
    
    if (dataString) {
        try {
            const userData = JSON.parse(dataString);
            displayElement.innerHTML = `
                <p>Nome: <strong>${userData.nome}</strong></p>
                <p>Email: <strong>${userData.email}</strong></p>
                <p><small>Salvo em: ${userData.data}</small></p>
            `;
        } catch (e) {
            displayElement.innerHTML = `<p>Erro ao ler dados do Local Storage.</p>`;
        }
    } else {
        displayElement.innerHTML = `<p>Nenhum cadastro encontrado localmente. Cadastre-se na página "Cadastro".</p>`;
    }
}

// ==========================================================
// 4. Modo Escuro Acessível (Theme Toggle)
// ==========================================================

function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme-preference');

    if (savedTheme) {
        document.body.className = savedTheme;
    } else {
        document.body.className = 'light-theme'; 
    }
}

function setupThemeToggle() {
    const toggleButton = document.getElementById('theme-toggle');
    
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            const isDark = document.body.classList.contains('dark-theme');
            
            if (isDark) {
                document.body.classList.remove('dark-theme');
                document.body.classList.add('light-theme');
                localStorage.setItem('theme-preference', 'light-theme');
            } else {
                document.body.classList.remove('light-theme');
                document.body.classList.add('dark-theme');
                localStorage.setItem('theme-preference', 'dark-theme');
            }
        });
    }
}


// ==========================================================
// 5. Inicialização do SPA
// ==========================================================

// O uso do loadSavedTheme e setupThemeToggle é OBRIGATÓRIO
loadSavedTheme(); 
setupThemeToggle(); 

navLinks.forEach(link => {
    link.addEventListener('click', handleNavClick);
});

// A última linha que garante que o conteúdo 'home' seja injetado
const initialRoutePath = window.location.pathname.slice(1) || 'home';
loadRoute(initialRoutePath);
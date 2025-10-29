// js/templates.js
export const templates = {
    inicio: () => `
        <section>
            <h2>Quem somos?</h2>
            <p>Somos uma ONG que atua com gatos abandonados ou em situação de rua.</p>
            <img class="centralizar-img" src="imagens/gatinhos.jpg" alt="Voluntários em ação">
        </section>
        <section>
            <h2>Missão da ONG Gatinhos Salvos</h2>
            <p>Promover dignidade e acolhimento aos animais abandonados.</p>
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

    projeto: () => `
        <section>
            <h2>Nosso Projeto</h2>
            <h3>Nosso Foco</h3>
            <p>Resgate, reabilitação e adoção de felinos abandonados em Curitiba e região.</p>
            <p>Parceria com clínicas veterinárias e abrigos para garantir saúde e bem-estar dos animais.</p>
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
        <img class="centralizar-img" src="imagens/homem.jpg" alt="Gatos resgatados">
    `,

    cadastro: () => `
        <section>
            <h2>Cadastre-se</h2>
            <img class="centralizar-img" src="imagens/resgatados.jpg" alt="Faça seu cadastro para ajudar">
            <form id="cadastroForm">
                <fieldset>
                    <legend>Informações Pessoais</legend>
                    <label for="nome">Nome Completo:</label>
                    <input type="text" id="nome" name="nome" required minlength="3" placeholder="Seu nome completo">

                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email" required placeholder="email@exemplo.com">
                </fieldset>
                <fieldset>
                    <legend>Endereço</legend>
                    <label for="cidade">Cidade:</label>
                    <input type="text" id="cidade" name="cidade" placeholder="Ex.: São Paulo">
                </fieldset>
                <button type="submit">Enviar Cadastro</button>
            </form>
        </section>
    `
};

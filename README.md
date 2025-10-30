# 🐾 ONG Gatinhos Salvos - Single Page Application (SPA)

Este projeto é uma Single Page Application (SPA) desenvolvida para a ONG "Gatinhos Salvos", focada em demonstrar conceitos de desenvolvimento web moderno, acessibilidade e persistência de dados. O projeto está estruturado em torno do arquivo `index.html` dentro da pasta `/projetos/`.

## 🚀 Funcionalidades Chave

* **SPA (Single Page Application):** O site utiliza o JavaScript (`app.js`) e a History API para carregar o conteúdo das rotas (Início, Projeto, Cadastro) dinamicamente no `<main id="spa-container">`, sem recarregar a página.
* **Persistência de Dados (Local Storage):** Os dados inseridos no formulário de Cadastro são salvos no navegador via Local Storage e são exibidos na página "Projeto".
* **Modo Escuro Acessível (WCAG AA):** Implementação de um toggle para alternar entre modo claro e modo escuro, com cores de alto contraste e a persistência da preferência do usuário (salva no Local Storage).
* **Layout Limpo:** O CSS foi revisado para remover margens indesejadas e padronizar o fundo em um tom bege sutil no modo claro, eliminando a faixa branca.

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
| :--- | :--- |
| **HTML5** | Estrutura base da página (`index.html`). |
| **CSS3** | Estilização unificada (`style.css`), layout flexível e temas (Light/Dark Mode) via Variáveis CSS. |
| **JavaScript (ES6+)** | Lógica do SPA (roteamento), Local Storage, validação básica e controle de tema. |

## 📂 Estrutura do Projeto

ONG-Gatinhos-salvos--1/
├── css/
│   └── style.css
├── imagens/
│   └── gatinhos.jpg 
│   └── imgfundo.jpg
│   └── homem.jpg
│   └── resgatados.jpg
├── JS/
│   └── app.js        
└── projetos/
│   └── index.html
└── README.md
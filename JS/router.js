// js/router.js
import { templates } from './templates.js';
import { validarCadastro } from './validation.js';

export function carregarPagina(rota) {
    const app = document.getElementById('app');
    if (!templates[rota]) return;
    app.innerHTML = templates[rota]();

    if (rota === 'cadastro') {
        const form = document.getElementById('cadastroForm');
        form.addEventListener('submit', e => {
            e.preventDefault();
            if (validarCadastro(form)) {
                const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
                usuarios.push({
                    nome: form.nome.value,
                    email: form.email.value,
                    cidade: form.cidade.value
                });
                localStorage.setItem('usuarios', JSON.stringify(usuarios));
                alert('Cadastro realizado com sucesso!');
                form.reset();
            }
        });
    }
}

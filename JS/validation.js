// js/validation.js
export function validarCadastro(form) {
    const nome = form.querySelector('#nome').value.trim();
    const email = form.querySelector('#email').value.trim();

    if (nome.length < 3) {
        alert('Nome deve ter pelo menos 3 caracteres!');
        return false;
    }

    if (!email.includes('@')) {
        alert('Digite um e-mail válido!');
        return false;
    }

    return true;
}

// js/app.js
import { carregarPagina } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a[data-route]');
    
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const rota = link.dataset.route;
            carregarPagina(rota);
            history.pushState({ rota }, '', `#${rota}`);
        });
    });

    // Carregar a página inicial
    const hash = location.hash.replace('#', '') || 'inicio';
    carregarPagina(hash);
});

window.addEventListener('popstate', e => {
    const rota = e.state?.rota || 'inicio';
    carregarPagina(rota);
});

/**
 * Lógica da Landing Page - Daniel Tech Cell
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializa os ícones da biblioteca Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Feedback visual para dispositivos touch (mobile)
    const interactiveButtons = document.querySelectorAll('.btn-hover-effect');
    
    interactiveButtons.forEach(button => {
        // Simula o efeito de clique ao tocar
        button.addEventListener('touchstart', () => {
            button.style.transform = 'scale(0.98)';
        }, { passive: true });

        button.addEventListener('touchend', () => {
            button.style.transform = 'scale(1)';
        }, { passive: true });
    });

    console.log('Daniel Tech Cell: Scripts carregados e ícones prontos.');
});
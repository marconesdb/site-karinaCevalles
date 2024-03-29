 // Adiciona a classe 'active' ao tocar em um link da navbar na versão móvel
 document.querySelectorAll('.text-white.relative').forEach(link => {
    link.addEventListener('touchstart', () => {
        link.classList.add('active');
    });
    link.addEventListener('touchend', () => {
        link.classList.remove('active');
    });
});
// Função para rolar para o topo da página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Exibir ou ocultar o botão de âncora conforme a posição da rolagem da página
window.addEventListener('scroll', function() {
    var btnAnchor = document.getElementById('btn-anchor');
    if (window.scrollY > 100) {
        btnAnchor.style.display = 'block';
    } else {
        btnAnchor.style.display = 'none';
    }
});
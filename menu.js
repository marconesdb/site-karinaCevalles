// Adicionar evento de clique ao botão do menu toggle
document.getElementById("menu-toggle").addEventListener("click", function() {
    // Alternar a visibilidade dos submenus
    var submenus = document.getElementById("submenus");
    if (submenus.classList.contains("hidden")) {
        submenus.classList.remove("hidden");
    } else {
        submenus.classList.add("hidden");
    }
});
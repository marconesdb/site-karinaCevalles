const arrows = document.querySelectorAll('.arrow');

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const content = arrow.parentElement.nextElementSibling;
            content.classList.toggle('hidden');
        });
    });
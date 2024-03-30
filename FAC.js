const accordions = document.querySelectorAll('.accordion-content');

    accordions.forEach((accordion) => {
        const parent = accordion.parentElement;
        parent.querySelector('input[type="checkbox"]').addEventListener('change', () => {
            if (parent.querySelector('input[type="checkbox"]').checked) {
                accordion.classList.add('block');
                accordion.classList.remove('hidden');
            } else {
                accordion.classList.add('hidden');
                accordion.classList.remove('block');
            }
        });
    });


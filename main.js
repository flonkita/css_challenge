function enableBurgerMenu() {
    const trigger = document.querySelector('.burger');
    const navigation = document.querySelector('#header-nav');

    if (null === trigger || null === navigation) {
        return;
    }

    trigger.addEventListener('click', () => {
        if (window.innerWidth < 720) {
            navigation.classList.toggle('open');
        }
    });
}

enableBurgerMenu();

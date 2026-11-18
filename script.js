const screens = ['productScreen', 'sizesScreen', 'roomsScreen'];
function showScreen(id) {
    screens.forEach((screenId) => {
        document.getElementById(screenId).classList.toggle('is-hidden', screenId !== id);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('openSizes').addEventListener('click', () => showScreen('sizesScreen'));

document.querySelectorAll('.size-option').forEach((button) => {
    button.addEventListener('click', () => {
        showScreen('roomsScreen');
    });
});

document.querySelectorAll('[data-back]').forEach((button) => {
    button.addEventListener('click', () => showScreen(button.dataset.back));
});

if (location.hash === '#roomsScreen') showScreen('roomsScreen');

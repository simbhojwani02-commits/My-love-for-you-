document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('lastButton');
    const message = document.getElementById('hiddenMessage');

    if (button && message) {
        button.addEventListener('click', () => {
            message.style.display = 'block';
            button.style.display = 'none';
        });
    }
});

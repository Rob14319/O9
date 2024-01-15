document.addEventListener('DOMContentLoaded', function () {
    const trigger = document.querySelector('.popup-trigger');
    const popup = document.querySelector('.popup');
    const closeBtn = document.querySelector('.close-btn');

    trigger.addEventListener('click', function () {
        popup.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });
});

const btnTestScreen = document.querySelector('.j-btn-test');

btnTestScreen.addEventListener('click', () => {
 alert("Размер экрана " + window.screen.width +" х " + window.screen.height + " пикселей");
});
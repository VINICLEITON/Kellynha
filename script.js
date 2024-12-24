// Apenas execute o código da galeria se a página for a galeria
if (document.getElementById('gallery')) {
    // Exibe a galeria
    document.querySelector('.gallery').style.display = 'block';

    // Seleciona todas as imagens da galeria
    const images = document.querySelectorAll('.gallery-image');
    let currentIndex = 0;

    // Função para mostrar a próxima imagem
    function showNextImage() {
        images[currentIndex].classList.remove('active'); // Remove a classe 'active' da imagem atual
        currentIndex = (currentIndex + 1) % images.length; // Atualiza o índice da imagem atual
        images[currentIndex].classList.add('active'); // Adiciona a classe 'active' à nova imagem
    }

    // Mostra a primeira imagem
    images[currentIndex].classList.add('active');
    
    // Muda a imagem a cada 3 segundos
    setInterval(showNextImage, 3000);
}
document.querySelector('.close-button').addEventListener('click', function () {
    document.querySelector('.photo-opened-overlay').classList.remove('active');
    document.querySelector('.photo-opened').classList.remove('active');
});


const backButton = document.querySelector('.arrow-button.back');
const nextButton = document.querySelector('.arrow-button.next');

function updateButtons() {
    if (currentImage === 0) {
        backButton.disabled = true;
        backButton.classList.remove('active');
    } else {
        backButton.disabled = false;
        backButton.classList.add('active');
    }

    if (currentImage === images.length - 1) {
        nextButton.disabled = true;
        nextButton.classList.remove('active');
    } else {
        nextButton.disabled = false;
        nextButton.classList.add('active');
    }
}

nextButton.addEventListener('click', function() {
    currentImage = currentImage + 1;
    if (currentImage >= photos.length) {
        currentImage = 0;
    }

    openedImage.src = photos[currentImage].src;
    updateButtons();
});

backButton.addEventListener('click', function() {
    currentImage = currentImage - 1;
    if (currentImage < 0) {
        currentImage = photos.length - 1;
    }

    openedImage.src = photos[currentImage].src;
    updateButtons();
});

updateButtons();
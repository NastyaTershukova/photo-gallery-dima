const images = [
    {
       file: '1.PNG',
       category: 'people' 
    },
    {
        file: '2.jpg',
        category: 'people'
    },
    {
        file: '3.jpg',
        category: 'travel'
    },
    {
        file: '4.jpg',
        category: 'travel'
    },
    {
        file: '5.jpg',
        category: 'nature'
    }
];

function showImages(images) {
    document.querySelector('.photos-grid').innerHTML = '';
    for (let i = 0; i < images.length; i++) {
        let image = document.createElement('div');
        image.className = 'photo';
        image.innerHTML = `
        <img src="img/${images[i].file}">
        `;
        document.querySelector('.photos-grid').appendChild(image);
    }
    photos = document.querySelectorAll('.photo img');
    openImage();
}

let currentImage = 0;
let photos = [];
const openedImage = document.querySelector('.photo-opened img');

function openImage() {
    for (let i = 0; i < photos.length; i++) {
        photos[i].addEventListener('click', function () {
            document.querySelector('.photo-opened-overlay').classList.add('active');
            document.querySelector('.photo-opened').classList.add('active');
    
            openedImage.src = photos[i].src;
            currentImage = i;
            updateButtons();
        });
    }
    
}

showImages(images);
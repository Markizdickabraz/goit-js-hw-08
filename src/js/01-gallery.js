
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "../../node_modules/simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// формуємо галерею

const gallery = document.querySelector('.gallery');
// console.log(gallery);

const makeGalleryItems = ({preview, original, description}) => {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
};

// додаю галерею в DOM

const galleryList = galleryItems.map(makeGalleryItems).join(' ');
// console.log(galleryList);
gallery.innerHTML = galleryList;



gallery.addEventListener('click', selectImg );

function selectImg (event){
  event.preventDefault();
  // console.dir(event.target);
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const galleryImg = document.querySelectorAll('.gallery__image');
    
  galleryImg.forEach(img => {img.src = img.dataset.source});

  
};

let galleryOpenModal = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay : 250});
galleryOpenModal.on('show.simplelightbox', function () {
});


galleryOpenModal.on('error.simplelightbox', function (e) {
	console.log(e); // some usefull information
});

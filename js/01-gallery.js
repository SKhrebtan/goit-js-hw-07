import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from '../in';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryCollection = createGalleryCollectionMarkup(galleryItems);

galleryContainer.addEventListener('click', onFullSizePhotoViewing)

galleryContainer.insertAdjacentHTML('beforeend', galleryCollection);

function createGalleryCollectionMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${ preview }"
      data-source="${ original }"
      alt="${ description }"
    />
  </a>
</li>`;
  }).
    join('');
};

function onFullSizePhotoViewing(e) {
  e.preventDefault();

  const photoEl = e.target;
  if (e.target.nodeName !== 'IMG') {
    return;
  }
   
  openLightboxModule(photoEl);
  
}

function openLightboxModule(event) {
  const instance = basicLightbox.create(`<img src="${event.dataset.source}">`)
      
console.log(instance)
  instance.show()

  window.addEventListener('keydown',  (event) => { if (event.code === 'Escape') { instance.close() } console.log(event)});
}

// function onEscapeModalClosing (e) {
//   if (e.code === 'Escape'){ instance.close() }
   
//   console.log(e.code)
//   console.log(instance)
// }


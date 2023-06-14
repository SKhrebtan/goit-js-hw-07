import { galleryItems } from './gallery-items.js';
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
  if (photoEl.classList.contains('gallery__image') && photoEl.nodeName !== 'IMG') {
    return
  }

   openLightboxModule(photoEl); 
  
}

function openLightboxModule(event) {
  const instance = basicLightbox.create(`<img src="${event.dataset.source}" width="800" height="600">`,

    {
      onShow: () => galleryContainer.addEventListener('keydown', onEscapeModalClosing),
      onClose: () => galleryContainer.removeEventListener('keydown', onEscapeModalClosing),
    });

  function onEscapeModalClosing (e) {
    if (!(e.code === 'Escape'))
      return;
    
    instance.close();

  };

  instance.show();

};






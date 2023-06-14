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

  const photoEL = e.target;
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  photoEL.src = photoEl.dataset.source;
  console.log(photoEL.src);
}

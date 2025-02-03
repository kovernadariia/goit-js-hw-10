import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Hagalleryage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const gallery = document.querySelector('.gallery');
gallery.style.display = 'flex';
gallery.style.flexWrap = 'wrap';
gallery.style.gap = '24px';
gallery.style.listStyle = 'none';
gallery.style.maxWidth = '1128px';
gallery.style.margin = 'auto';
gallery.style.padding = '24px';

const fragment = document.createDocumentFragment();

images.forEach(image => {
  const li = document.createElement('li');
  li.classList.add('gallery-item');
  li.style.width = 'calc((100% - 48px) / 3)';

  const link = document.createElement('a');
  link.classList.add('gallery-link');
  link.href = image.original;

  const img = document.createElement('img');
  img.classList.add('gallery-image');
  img.src = image.preview;
  img.alt = image.description;
  img.width = 360;
  img.height = 200;
  img.style.transition = 'transform 0.2s ease';
  img.setAttribute('data-source', image.original);

  link.appendChild(img);
  li.appendChild(link);
  fragment.appendChild(li);
});

gallery.appendChild(fragment);

gallery.addEventListener('mouseover', event => {
  if (event.target && event.target.nodeName === 'IMG') {
    event.target.style.transform = 'scale(1.1)';
  }
});

gallery.addEventListener('mouseout', event => {
  if (event.target && event.target.nodeName === 'IMG') {
    event.target.style.transform = 'scale(1)';
  }
});

gallery.addEventListener('click', event => {
  if (event.target.nodeName === 'IMG') {
    console.log(event.target.parentElement.href);
  }
});
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
lightbox.on('shown.simplelightbox', function () {
  document.querySelector('.sl-wrapper').style.background = '#2E2F42';
});
lightbox;

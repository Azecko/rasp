import PhotoSwipeLightbox from 'photoswipe/lightbox'

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = new PhotoSwipeLightbox({
    gallery: '#gallery--getting-started',
    children: 'a',
    pswpModule: () => import('photoswipe')
  })
  lightbox.init()
})

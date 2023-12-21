import Swiper from 'swiper'
import { Pagination, Scrollbar } from 'swiper/modules'
import { gsap } from 'gsap'

document.addEventListener('DOMContentLoaded', () => {
  const swiperOptions = {
    modules: [Pagination, Scrollbar],
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    mousewheel: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
      draggable: true
    }
  }

  let isMobileOrTablet

  gsap.matchMedia({ isMobileOrTablet: '(max-width: 1024px)' }).add((context) => {
    isMobileOrTablet = context.conditions.isMobileOrTablet
  })

  const videoSwiperOptions = {
    modules: [Pagination],
    watchState: true,
    preventInteractionOnTransition: true,
    loop: true,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    on: {
      slideChangeTransitionStart: () => {
        if (isMobileOrTablet) {
          const activeVideo = document.querySelector('.swiper-slide-active .module-banner-video')

          if (activeVideo) {
            activeVideo.muted = true
            activeVideo.play()
          }
        }
      },
      slideChangeTransitionEnd: () => {
        if (isMobileOrTablet) {
          const nextVideo = document.querySelector('.swiper-slide-next .module-banner-video')
          const prevVideo = document.querySelector('.swiper-slide-prev .module-banner-video')

          if (prevVideo || nextVideo) {
            prevVideo && prevVideo.pause()
            nextVideo && nextVideo.pause()
          }
        }
      }
    }
  }

  // eslint-disable-next-line no-new
  new Swiper('.swiper', swiperOptions)
  // eslint-disable-next-line no-new
  new Swiper('.swiper-video-container', videoSwiperOptions)
})

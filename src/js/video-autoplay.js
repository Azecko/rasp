import { gsap } from 'gsap'
document.addEventListener('DOMContentLoaded', () => {
  gsap.matchMedia({ isMobile: '(max-width: 767px)' }).add((context) => {
    function playVideos() {
      if (!context.conditions.isMobile) {
        const videos = document.querySelectorAll('video')

        videos.forEach((video) => {
          video.setAttribute('src', video.getAttribute('data-src'))
          video.play()
        })
      }
    }

    window.addEventListener('load', playVideos)
  })
})

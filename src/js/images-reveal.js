import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger.js'
gsap.registerPlugin(ScrollTrigger)

window.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.reveal-container')

  items.forEach(function (item) {
    const img = item.querySelector('img')
    const cov = item.getElementsByClassName('reveal-cover')
    const bodyRect = document.body.getBoundingClientRect()
    const elemRect = item.getBoundingClientRect()
    const offset = elemRect.top - bodyRect.top

    if (offset > window.scrollY + window.innerHeight) {
      const tl = gsap.timeline({
        scrollTrigger: {
          start: '0 bottom',
          trigger: item
        }
      })

      tl.set(cov, { autoAlpha: 1 })
      tl.from(cov, {
        yPercent: 50,
        duration: 1,
        ease: 'power2.out'
      })

      tl.from(img, {
        yPercent: -25,
        scale: 1.3,
        duration: 1,
        delay: -1,
        ease: 'power2.out'
      })
    }
  })
})

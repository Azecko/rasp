document.addEventListener('DOMContentLoaded', () => {
  const intersectionItems = document.querySelectorAll('.intersection-item')

  const options = {
    root: null,
    rootMargin: '0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.style.visibility = 'visible'
      } else {
        entry.target.style.visibility = 'hidden'
      }
    })
  }, options)

  intersectionItems.forEach((image) => {
    observer.observe(image)
  })
})

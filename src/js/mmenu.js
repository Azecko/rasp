import Mmenu from 'mmenu-js'

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu-mobile')
  if (menu) {
    // eslint-disable-next-line
    new Mmenu(
      menu,
      {
        offCanvas: {
          position: 'left-front'
        },
        theme: 'light'
      },
      {
        classNames: {
          selected: 'active'
        },
        offCanvas: {
          page: {
            selector: '#app'
          }
        }
      }
    )
  }
})

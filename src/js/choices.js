import Choices from 'choices.js'

document.addEventListener('DOMContentLoaded', () => {
  const field = document.querySelectorAll('.js-choice')
  const fieldMultiple = document.querySelectorAll('.js-multiple-choice')

  field.forEach(
    (element) =>
      new Choices(element, {
        allowHTML: true
      })
  )

  fieldMultiple.forEach(
    (element) =>
      new Choices(element, {
        maxItemCount: 4,
        removeItems: true,
        removeItemButton: true,
        editItems: false,
        allowHTML: true
      })
  )
})

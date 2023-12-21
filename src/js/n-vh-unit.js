// Permet une utilisation plus "consistante" de l'unité VH sur les mobiles (Afin d'éviter les glitch au scroll).
// à utiliser selon le schéma : height : calc(var(--vh, 1vh) * percentView); (modifier "percentView" par le pourcentage souhaité de la hauteur de la fenêtre.

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
const vh = window.innerHeight * 0.01
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`)

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
})

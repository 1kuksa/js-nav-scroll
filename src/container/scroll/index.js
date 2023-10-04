const scrollButton = document.getElementById('buttonScroll')

window.buttonScroll.onclick = () =>
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })

// Функція, яка буде визиватися при прокручуванні сторінки
function handleScroll() {
  // Визначаємо висоту одного екрану (viewport height)
  const viewportHeight = window.innerHeight

  // Визначаємо відстань на яку прокручено сторінку
  const scrollDistance = window.scrollY

  // Якщо відстань прокрутки більше або рівна висоті одного екрану, показуємо або приховуємо її
  if (scrollDistance >= viewportHeight) {
    scrollButton.style.display = 'block'
  } else {
    scrollButton.style.display = 'none'
  }
}

window.addEventListener('scroll', handleScroll)

// Відразу викликаємо функцію handleScroll, щоб перевірити стан кнопки при завантаженні сторінки
handleScroll()

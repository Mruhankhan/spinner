let buttonOne = document.getElementById("button-1")
let buttonTwo = document.getElementById("button-2")
let buttonThree = document.getElementById("button-3")
let buttonFour = document.getElementById("button-4")
let buttonFive = document.getElementById("button-5")
let buttonSix = document.getElementById("button-6")
buttonOne.addEventListener("click", () => {
  let divOne = document.getElementById("div-1")
  divOne.style.animationName = "aa"
})

buttonTwo.addEventListener("click", () => {
  let divOne = document.getElementById("div-1")
  divOne.style.animationName = "div-animation-spin-full"
})

buttonThree.addEventListener("click", () => {
  let divOne = document.getElementById("div-1")
  typeColor = ["red", "yellow", "blue", "brown", "orange", "green", "pink"]
  let colors = typeColor[Math.floor(Math.random() * typeColor.length)]
  divOne.style.backgroundColor = colors
})

buttonFour.addEventListener("click", () => {
  typeBackgroundColor = ["red", "yellow", "blue", "brown", "orange", "green", "pink"]
  let backgroundColor = typeBackgroundColor[Math.floor(Math.random() * typeBackgroundColor.length)]
  document.body.style.backgroundColor = backgroundColor
})

buttonFive.addEventListener("click", () => {
  let divOne = document.getElementById("div-1")
  divOne.style.animationName = "div-animation-spin-full"
  divOne.style.animationDuration = "0.5s"
})

buttonSix.addEventListener("click", () => {
  let divOne = document.getElementById("div-1")
  divOne.style.animationName = "div-animation-spin-full"
  divOne.style.animationDuration = "2s"
})

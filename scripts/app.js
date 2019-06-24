const img = document.querySelector(".image")
let count = 0;
let images = ["hero-image-0.jpg", "hero-image-1.jpg", "hero-image-2.jpg", "hero-image-3.jpg", "not-found.jpg"]

const rotateImage = () => {
  setInterval(changeImage, 1500)
}

const changeImage = () => {
  let st = `background-image: url(./images/${images[count]})`
  img.style = st
  if (count >= images.length-1) {
    count = 0
  } else {
    count++
  }
}

rotateImage()

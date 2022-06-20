// write your code here
let ramenMenu = document.getElementById('ramen-menu')
let ramenImage = document.getElementById('img')
let ramenName = document.querySelector('.name')
let ramenRest = document.querySelector('.restaurant')
let rating = document.getElementById('rating-display')
let comment = document.getElementById('comment-display')
const url = `http://localhost:3000/ramens`

function fetchData(){
  return fetch(url).then(res => res.json())

}

function displayRamen(){
  fetchData().then( res => {
    res.forEach(element => {
      let span = document.createElement('img')
      span.src = element.image
      ramenMenu.appendChild(span)
      span.addEventListener('click', () => {
        displayEach(element)
      })
    });
  })
}

function displayEach(element){
  ramenImage.src = element.image
  ramenName.innerHTML = element.name
  ramenRest.innText = element.restaurant
  rating.innerHTML = element.rating
  comment.innerHTML = element.comment
}


// for submit
let inputName = document.getElementById('new-name')
let inputRest = document.getElementById('new-restaurant')
let inputRating = document.getElementById('new-rating')
let inputComment = document.getElementById('new-comment')
let inputImage = document.getElementById('new-image')



function submitForm(){
  let form = document.getElementById('new-ramen')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let image = document.createElement('img')
    image.src =inputImage.value
    ramenMenu.appendChild(image)
    image.addEventListener('click', () =>{
      ramenImage.src = ''
      ramenName.innerHTML = ''
      ramenRest.innText = ''
      rating.innerHTML = ''
      comment.innerHTML = ''
      ramenImage.src = inputImage.value
      ramenName.innerHTML = inputName.value
      ramenRest.innText = inputRest.value
      rating.innerHTML = inputRating.value
      comment.innerHTML = inputComment.value
    })

    
  })

}
displayRamen()
submitForm()
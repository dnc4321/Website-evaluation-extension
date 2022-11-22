const btn = document.querySelector('.analyse');

btn.addEventListener('click',() => {
  console.log('analyse clicked')
  fetchurl();
})

function fetchurl() {
  btn.innerHTML = "YOU CLICKED ME!";
  
}
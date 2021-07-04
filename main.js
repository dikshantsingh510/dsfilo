let open_btn = document.getElementById('btn')
let close_btn = document.getElementById('close_btn')
let modal = document.getElementById('modal')
let popup = document.getElementById('popup')

open_btn.addEventListener('click',(openModal)=>{
  popup.classList.add('active')
})
close_btn.addEventListener('click', (closeModal) => {
  popup.classList.remove('active')
})
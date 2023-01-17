// document.getElementById('login-btn').addEventListener('click', function() {
//   document.querySelector('.overlay').classList.add('open-modal');
// })

// document.getElementById('close-btn').addEventListener('click', function() {
//   document.querySelector('.overlay').classList.remove('open-modal');
// })



// $ = document.querySelector
// on = addEventListener
// addClass = classList.add

$('#login-btn').on('click', function() {
  $('.overlay').addClass('open-modal');
})

$('#close-btn').on('click', function() {
  $('.overlay').removeClass('open-modal');
})


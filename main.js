// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  const likes = document.getElementsByClassName('like-glyph')
  for (const like of likes) {
    like.addEventListener("click", clickHeart)
  }
});

function clickHeart(e) {
  let heart = e.target;
  if (heart.innerText == EMPTY_HEART) {
    mimicServerCall()
    .then(res => {
      heart.innerText = FULL_HEART;
      heart.setAttribute('class', 'activated-heart');
    })
    .catch(error => {
      const modal = document.getElementById('modal');
      modal.removeAttribute('class', 'hidden');
      modal.innerText = "Server failed";
      setTimeout(() => modal.setAttribute('class', 'hidden'), 5000);
    })
  } else {
    heart.innerText = EMPTY_HEART;
    heart.removeAttribute('class', 'activated-heart');
  }
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

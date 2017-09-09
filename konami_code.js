// const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const code = [65, 66, 67]

const main = document.querySelector('body')

var index = 0

// const main = document.querySelector('body')

function init() {
<<<<<<< HEAD

var index = 0;
function onKeyDownHandler(e) {
  const key = parseInt(e.which || e.detail)
  if (key === code[index]) {
    index++;
    if (index === code.length) {
      window.alert("You have unlimited lives!");
=======
}

main.addEventListener('keydown', function(e) {
  const key = parseInt(e.which)
  if (key === code[index]) {
    index++;
    if (index === code.length) {
      alert("You have unlimited lives!");
>>>>>>> 54395514cdb63c8345dcc3ebc276d572819646eb
      index = 0;
    }
  }
  else {
<<<<<<< HEAD
    index = 0
  }
}

document.body.addEventListener('keydown', onKeyDownHandler)
}
=======
    console.log('Wrong again. Start over...')
    index = 0
  }
})
>>>>>>> 54395514cdb63c8345dcc3ebc276d572819646eb

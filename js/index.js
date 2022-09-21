
// function divland() {
//     let div_count = parseInt(document.getElementById("div_count").value);
//     let person = ['raihen','luikang']
//     for (x = 1; x <= div_count; x++) {
//       var boardik = document.createElement("div");
//       boardik.innerHTML = x;
//       boardik.className = "blah";
//       boardik.classList.add("a"+x)
//       boardik.setAttribute("onclick", "none(this)");
//       document.getElementById("board").appendChild(boardik);
//     }
//   }

// function none(e){
//     e.style.background = "purple"
//     e.classList.add("div_border")
// }

const char1 = document.getElementById("char1")
const char2 = document.getElementById("char2")
const char3 = document.getElementById("char3")
const char4 = document.getElementById("char4")
const char5 = document.getElementById("char5")
const char6 = document.getElementById("char6")
const char7 = document.getElementById("char7")
const audio = document.getElementById("audio");
let choosenChar = document.getElementById("choosen-char")

function ch1(){
  char1.classList.add("active")
  char2.classList.remove("active")
  char3.classList.remove("active")
  char4.classList.remove("active")
  char5.classList.remove("active")
  char6.classList.remove("active")
  char7.classList.remove("active")
  choosenChar.src = "gif/char1.gif"
  audio.src = "mp3/char1.mp3"
  audio.play()
}
function ch2(){
  char2.classList.add("active")
  char1.classList.remove("active")
  char3.classList.remove("active")
  char4.classList.remove("active")
  char5.classList.remove("active")
  char6.classList.remove("active")
  char7.classList.remove("active")
  choosenChar.src = "gif/char2.gif"
  audio.src = "mp3/char2.mp3"
  audio.play()
}
function ch3(){
  char3.classList.add("active")
  char2.classList.remove("active")
  char1.classList.remove("active")
  char4.classList.remove("active")
  char5.classList.remove("active")
  char6.classList.remove("active")
  char7.classList.remove("active")
  choosenChar.src = "gif/char3.gif"
  audio.src = "mp3/char3.mp3"
  audio.play()
}
function ch4(){
  char4.classList.add("active")
  char2.classList.remove("active")
  char3.classList.remove("active")
  char1.classList.remove("active")
  char5.classList.remove("active")
  char6.classList.remove("active")
  char7.classList.remove("active")
  choosenChar.src = "gif/char4.gif"
  audio.src = "mp3/char4.mp3"
  audio.play()
}
function ch5(){
  char5.classList.add("active")
  char2.classList.remove("active")
  char3.classList.remove("active")
  char4.classList.remove("active")
  char1.classList.remove("active")
  char6.classList.remove("active")
  char7.classList.remove("active")
  choosenChar.src = "gif/char5.gif"
  audio.src = "mp3/char5.mp3"
  audio.play()
}
function ch6(){
  char6.classList.add("active")
  char2.classList.remove("active")
  char3.classList.remove("active")
  char4.classList.remove("active")
  char5.classList.remove("active")
  char1.classList.remove("active")
  char7.classList.remove("active")
  choosenChar.src = "gif/char6.gif"
  audio.src = "mp3/char6.mp3"
  audio.play()
}
function ch7(){
  char7.classList.add("active")
  char2.classList.remove("active")
  char3.classList.remove("active")
  char4.classList.remove("active")
  char5.classList.remove("active")
  char6.classList.remove("active")
  char1.classList.remove("active")
  choosenChar.src = "gif/char7.gif"
  audio.src = "mp3/char7.mp3"
  audio.play()
}

function themeSong(){
  const themeSong = document.getElementById("audio0")
  themeSong.volume = 0.1
  themeSong.play()
} 
function sound(){
  const sound = document.getElementById("audio1")
  sound.volume = 0.5
  sound.play()

}






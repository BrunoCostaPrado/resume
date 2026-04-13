let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]
const timerRef = document.querySelector(".display")
let int
document.getElementById("start").addEventListener("click", () => {
  int = setInterval(display, 10)
})
document.getElementById("pause").addEventListener("click", () => {
  clearInterval(int)
})
document.getElementById("reset").addEventListener("click", () => {
  clearInterval(int)
  ;[milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]
  timerRef.innerHTML = "00 : 00 : 00 : 000"
})

function display() {
  milliseconds += 10
  if (milliseconds == 1000) {
    milliseconds = 0
    seconds++
    if (seconds == 60) {
      seconds = 0
      minutes++
      if (minutes == 60) {
        minutes = 0
        hours++
      }
    }
  }

  const h = hours < 10 ? "0" + hours : hours
  const m = minutes < 10 ? "0" + minutes : minutes
  const s = seconds < 10 ? "0" + seconds : seconds
  const ms =
    milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds

  timerRef.innerHTML = `${h} : ${m} : ${s}: ${ms}`
}

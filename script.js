const pole = document.querySelector(".pole");
const btn1 = document.querySelector(".btn1");
const time = document.querySelector(".time");
const ilosc = document.querySelector(".ilosc");
const wynikk = document.querySelector(".wynikk");
let i = 0;
let wynik = 0;
function tworzenieObiektu() {
  let el = document.createElement("img");
  let y = Math.floor(Math.random() * 430) + "px";
  let x = Math.floor(Math.random() * 730) + "px";
  el.style.top = y;
  el.style.left = x;
  let obraz = Math.ceil(Math.random() * 6);
  el.setAttribute("class", "akapit");
  el.setAttribute("src", obraz + ".png");
  console.log(el);
  i++;
  pole.appendChild(el);
  el.addEventListener("click", () => {
    el.remove();
    i--;
    wynik++;
    wynikk.innerHTML = wynik;
  });
  if (i > ilosc.value) {
    clearInterval(interval);
    pole.innerHTML = null;
    alert("Przekroczono ilość przedmiotów");
    i = 0;
    wynik = 0;
  }
}

let interval;
btn1.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(tworzenieObiektu, time.value);
});

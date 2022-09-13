document.getElementById("img").addEventListener("click", increaseCounter);

let i = 0;
function increaseCounter() {
    i += 1;
    document.getElementById("counter").innerHTML = i;
}

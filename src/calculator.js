const onOff = document.querySelector(".onoff");
const value = document.querySelector(".value");

onOff.addEventListener("click", function () {
    value.classList.toggle("num-hidden");
});
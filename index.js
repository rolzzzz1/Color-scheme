const colorPicker = document.getElementById("colorPicker");
const modePicker = document.getElementById("modePicker");
const getScheme = document.getElementById("getScheme");
var colorHex = "";
var mode = "";

colorPicker.addEventListener("change", function () {
  colorHex = colorPicker.value.replace("#", "");
});

modePicker.addEventListener("change", function () {
  mode = modePicker.value;
});

getScheme.addEventListener("click", function () {
  fetch(`https://www.thecolorapi.com/scheme?hex=${colorHex}&mode=${mode}`)
    .then((response) => response.json())
    .then((data) => {
      colorHex = "#" + colorHex;
      document.getElementById("colorSeed").style.backgroundColor = colorHex;
      document.getElementById("color1").style.backgroundColor =
        data.colors[0].hex.value;
      document.getElementById("color2").style.backgroundColor =
        data.colors[1].hex.value;
      document.getElementById("color3").style.backgroundColor =
        data.colors[2].hex.value;
      document.getElementById("color4").style.backgroundColor =
        data.colors[3].hex.value;

      document.getElementById("text1").textContent = colorHex;
      document.getElementById("text2").textContent = data.colors[1].hex.value;
      document.getElementById("text3").textContent = data.colors[2].hex.value;
      document.getElementById("text4").textContent = data.colors[3].hex.value;
      document.getElementById("text5").textContent = data.colors[4].hex.value;
    });
});

const colorPicker = document.getElementById("colorPicker");
const modePicker = document.getElementById("modePicker");
const getScheme = document.getElementById("getScheme");
const msgDiv = document.getElementsByClassName("msgDiv");
const colorDivContainer = document.getElementsByClassName("colorDivContainer");
const colorTextContainer =
  document.getElementsByClassName("colorTextContainer");
var colorHex = colorPicker.value.replace("#", "");
var mode = "";
console.log(colorHex);

console.log(msgDiv);

colorPicker.addEventListener("change", function () {
  colorHex = colorPicker.value.replace("#", "");
});

modePicker.addEventListener("change", function () {
  mode = modePicker.value;
  console.log(mode);
});

getScheme.addEventListener("click", function () {
  //   console.log(
  //     `https://www.thecolorapi.com/scheme?hex=${colorHex}&mode=${mode}`
  //   );

  console.log(colorHex);
  console.log(mode);

  if (mode === "") {
    if (msgDiv[0].classList.contains("hidden")) {
      msgDiv[0].classList.remove("hidden");
      msgDiv[1].classList.remove("hidden");
    }

    if (!colorDivContainer[0].classList.contains("hidden")) {
      colorDivContainer[0].classList.add("hidden");
      colorTextContainer[0].classList.add("hidden");
    }
  } else {
    if (!msgDiv[0].classList.contains("hidden")) {
      msgDiv[0].classList.add("hidden");
      msgDiv[1].classList.add("hidden");
    }

    if (colorDivContainer[0].classList.contains("hidden")) {
      colorDivContainer[0].classList.remove("hidden");
      colorTextContainer[0].classList.remove("hidden");
    }

    fetch(`https://www.thecolorapi.com/scheme?mode=${mode}&hex=${colorHex}`)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("colorSeed").style.backgroundColor = colorHex;
        document.getElementById("color1").style.backgroundColor =
          data.colors[0].hex.value;
        document.getElementById("color2").style.backgroundColor =
          data.colors[1].hex.value;
        document.getElementById("color3").style.backgroundColor =
          data.colors[2].hex.value;
        document.getElementById("color4").style.backgroundColor =
          data.colors[3].hex.value;

        document.getElementById("text1").textContent = "#" + colorHex;
        document.getElementById("text2").textContent = data.colors[1].hex.value;
        document.getElementById("text3").textContent = data.colors[2].hex.value;
        document.getElementById("text4").textContent = data.colors[3].hex.value;
        document.getElementById("text5").textContent = data.colors[4].hex.value;
      });
  }
});

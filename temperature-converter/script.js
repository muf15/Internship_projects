function convert(from) {
  let celsius = parseFloat(document.getElementById("celsius").value);
  let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
  let kelvin = parseFloat(document.getElementById("kelvin").value);

  if (isNaN(celsius)) celsius = 0;
  if (isNaN(fahrenheit)) fahrenheit = 0;
  if (isNaN(kelvin)) kelvin = 0;

  switch (from) {
    case "C":
      fahrenheit = (celsius * 9) / 5 + 32;
      kelvin = celsius + 273.15;
      break;
    case "F":
      celsius = ((fahrenheit - 32) * 5) / 9;
      kelvin = ((fahrenheit - 32) * 5) / 9 + 273.15;
      break;
    case "K":
      celsius = kelvin - 273.15;
      fahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;
      break;
  }

  document.getElementById("celsius").value = celsius.toFixed(2);
  document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
  document.getElementById("kelvin").value = kelvin.toFixed(2);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (document.activeElement.id === "celsius") {
      convert("C");
    } else if (document.activeElement.id === "fahrenheit") {
      convert("F");
    } else if (document.activeElement.id === "kelvin") {
      convert("K");
    }
  }
});

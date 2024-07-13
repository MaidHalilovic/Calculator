document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");

  document.querySelector(".calculator").addEventListener("click", (e) => {
    const target = e.target;

    if (target.matches(".number")) {
      display.innerText += target.innerText;
    } else if (target.matches(".operator")) {
      display.innerText += target.innerText;
    } else if (target.matches("#equals")) {
      display.innerText = eval(display.innerText);
    } else if (target.matches("#delete")) {
      display.innerText = "";
    }
  });
});

//eval uzima string i izvrsava kod unutar tog stringa npr eval (2+2)

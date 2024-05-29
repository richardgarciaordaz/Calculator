const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");


botones.forEach(boton => {
    boton.addEventListener("click", () => {
        if (boton.textContent === "C") {
            pantalla.textContent = "";
        } else if (boton.textContent === "←") {
            pantalla.textContent = pantalla.textContent.slice(0, -1);
        } else if (boton.textContent === "=") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch (error) {
                pantalla.textContent = "Error";
            }
        } else {
            pantalla.textContent += boton.textContent;
        }
    });
})
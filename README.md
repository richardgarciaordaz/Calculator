HTML Structure (index.html):

The basic structure of a calculator is created using HTML.
It consists of a container element with the class calculadora that holds the calculator display (pantalla) and buttons (btn).
Each button has a unique ID for functionality in the JavaScript.
CSS Styling (styles.css):

Styles are applied to the entire document (*) to ensure proper formatting.
The body element is centered both horizontally and vertically using flexbox (justify-content: center; align-items: center;).
The calculator container (calculadora) is styled with a dark background color (#181818), rounded corners (border-radius: 1rem), and a grid layout (display: grid;) to position the display and buttons.
The display (pantalla) uses a light background color (#fff), flexbox for layout (display: flex; flex-direction: column;), and right-aligns the content (align-items: flex-end;).
Buttons (btn) inherit the light background color (#fff), dark text color (#333), and rounded corners (border-radius: .5rem). They are also styled with no borders (border: none;), proper padding (padding: 1.5rem 1rem;), and a cursor change on hover (cursor: pointer;) to indicate clickability.
A subtle hover effect (background-color: #ddd;) is added to buttons to provide visual feedback.
The equals button (#igual) has a different background color (#dd1529) and white text color (color: white;) to stand out. It also maintains the neumorphism styling.
Most importantly, neumorphism effects are applied using the box-shadow property. This property creates a subtle 3D raised/inset effect on elements by adding offsets and blur to inner and outer shadows.
JavaScript Functionality (index.js):

The JavaScript code uses the document.querySelector method to select the calculator display element with the class pantalla.
It then uses document.querySelectorAll to select all button elements with the class btn.
A forEach loop iterates through each button, adding an event listener (addEventListener) for the click event.
Inside the event listener function, the clicked button's text content is checked using an if-else statement.
The C button clears the display (pantalla.textContent = "";).
The backspace button (←) removes the last character from the display (pantalla.textContent = pantalla.textContent.slice(0, -1);).
The equals button (=) attempts to evaluate the expression in the display using eval. If there's an error, it displays "Error" on the screen (pantalla.textContent = "Error";).
Any other button appends its text content to the display (pantalla.textContent += boton.textContent;).
In essence, the HTML provides the structure, CSS applies the styles with neumorphism effects, and JavaScript adds interactivity to the calculator.
![913shots_so](https://github.com/richardgarciaordaz/Calculator/assets/64115217/37504f18-f5e2-45b5-babc-9a4da16bd265)

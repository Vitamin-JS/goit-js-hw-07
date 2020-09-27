// Напиши скрипт который, при наборе текста в инпуте input#name-input(событие input),
// подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

/* < input type = "text" placeholder = "Ваше имя?" id = "name-input" />
    <h1>Привет, <span id="name-output">незнакомец</span>!</h1> */

const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

function onInputChange(event) {
  let inputName = inputRef.textContent;
  //   console.log(event.currentTarget.value);  консолит каждый символ

  if (event.currentTarget.value) {
    outputRef.textContent = event.currentTarget.value;
  } else {
    outputRef.textContent = "незнакомец";
  }
}

inputRef.addEventListener("input", onInputChange);

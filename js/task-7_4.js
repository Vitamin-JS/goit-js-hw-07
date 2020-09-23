// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

{
  /* <div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>; */
}

let totalResultRef = document.querySelector("#value");
let counterValue = 0;
console.log("Tast 7-4", totalResultRef);
// console.log(counterValue);

const increment = function () {
  counterValue += 1;

  totalResultRef.textContent = counterValue;
  //   console.log("Добавляет +1");
};

const decrement = function () {
  counterValue -= 1;
  totalResultRef.textContent = counterValue;
  //   console.log("Отнимает -1");
};

const increaseBtnRef = document.querySelector('[data-action="increment"]');
const decreaseBtnRef = document.querySelector('[data-action="decrement"]');

increaseBtnRef.addEventListener("click", increment);
decreaseBtnRef.addEventListener("click", decrement);

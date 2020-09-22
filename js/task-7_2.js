// В HTML есть пустой список ul#ingredients.

// < ul id = "ingredients" ></ul >

//     В JS есть массив строк.
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//     после чеговставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingridientsEmpyList = document.querySelector("#ingredients");

const makeElements = ingredients.map((element) => {
  const createEl = document.createElement("li");
  createEl.textContent = element;
  return createEl; // возвращает каждый новый элемент =>  <li>Картошка</li> и т.д.
});
//console.log(makeElements); // выводит массив из 6ти <li>

ingridientsEmpyList.append(...makeElements);
console.log(ingridientsEmpyList);

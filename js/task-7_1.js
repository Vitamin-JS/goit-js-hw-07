// ==================Напиши скрипт, который выполнит следующие операции.================================

// 1) Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//     Получится 'В списке 3 категории.'.

// 2) Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
// текст заголовка элемента(тега h2)  и количество элементов в категории(всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const itemsCount = document.querySelectorAll(".item");
console.log(` В списке ${itemsCount.length} категории`);

const categoryList = document.querySelector("#categories");
// console.log(categoryList);    Получает html всего ul-li-li-li

const categoryListArray = categoryList.children; // псевдомассив всех детей ul - 3 элемента li
//console.log(categoryListArray);
const catgoryArray = Array.from(categoryListArray); // массив всех всех детей ul - 3 элемента li

const categoryNameOfArray = catgoryArray.map((element) => {
  //console.log(element);

  console.log(element.firstElementChild.textContent); // выводит название категории
  console.log(
    `Количество элементов: ${element.lastElementChild.children.length}`
  ); // выводит кол-во элементов
});

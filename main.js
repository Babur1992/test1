document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".reviews-slider ul");
  const items = slider.querySelectorAll(".review-item");
  const itemCount = items.length;
  let currentItem = 0;

  // Додаємо класи для стилізації, якщо їх ще немає
  slider.classList.add("reviews-slider-list");
  items.forEach((item) => item.classList.add("reviews-slider-item"));

  function showItem(index) {
    // Перевірка на межі масиву
    if (index < 0) {
      currentItem = itemCount - 1;
    } else if (index >= itemCount) {
      currentItem = 0;
    } else {
      currentItem = index;
    }

    // Скидаємо класи active у всіх елементів
    items.forEach((item) => item.classList.remove("active"));

    // Додаємо клас active поточному елементу
    items[currentItem].classList.add("active");
  }

  // Показуємо перший елемент при завантаженні сторінки
  showItem(currentItem);

  // Створення кнопок "назад" і "вперед"
  const prevButton = document.createElement("button");
  prevButton.textContent = "<"; // Або будь-який інший символ/зображення
  prevButton.classList.add("slider-button", "prev");
  const nextButton = document.createElement("button");
  nextButton.textContent = ">"; // Або будь-який інший символ/зображення
  nextButton.classList.add("slider-button", "next");

  // Додаємо кнопки до контейнера слайдера
  const sliderContainer = document.querySelector(".reviews-slider");
  sliderContainer.appendChild(prevButton);
  sliderContainer.appendChild(nextButton);

  // Додаємо обробники подій для кнопок
  prevButton.addEventListener("click", () => {
    showItem(currentItem - 1);
  });

  nextButton.addEventListener("click", () => {
    showItem(currentItem + 1);
  });
});

// MOBILE=====================


document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burger-menu");
  const nav = document.querySelector(".nav");

  burgerMenu.addEventListener("click", () => {
    nav.classList.toggle("active"); // Показуємо/ховаємо меню
    burgerMenu.classList.toggle("active"); // Змінюємо іконку
  });
});




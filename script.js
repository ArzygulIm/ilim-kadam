// const cardsData = [
//   { type: "question", points: 10, question: "Решите уравнение: 3x − 7 = 14", answer: "x = 7" },
//   { type: "question", points: 20, question: "Найдите дискриминант уравнения x² − 5x + 6 = 0.", answer: "D = 1" },
//   { type: "question", points: 10, question: "Решите систему: x + y = 10, x − y = 2.", answer: "x = 6, y = 4" },
//   { type: "question", points: 20, question: "Упростите: (a + b)(a - b) - (a - b)², ", answer: "2ab" },
//   { type: "question", points: 30, question: "Найдите корни: x² − 9 = 0.", answer: "x = −3 и x = 3" },
//   { type: "question", points: 10, question: "Чему равен sin 30°?", answer: "1/2" },
//   { type: "question", points: 20, question: "В прямоугольном треугольнике катеты 6 и 8. Найдите гипотенузу.", answer: "10" },
//   { type: "question", points: 30, question: "Найдите площадь круга радиуса 3. Ответ через π.", answer: "9π" },
//   { type: "question", points: 20, question: "Решите неравенство: 2x + 3 > 11.", answer: "x > 4" },
//   { type: "question", points: 10, question: "Найдите 15% от 200.", answer: "30" },
//   { type: "question", points: 30, question: "Последовательность: 3, 7, 11, 15, ... Найдите 10-й член.", answer: "39" },
//   { type: "question", points: 20, question: "Найдите сумму первых 10 членов арифметической прогрессии 2, 5, 8, ...", answer: "155" },
//   { type: "question", points: 30, question: "Если f(x)=2x²−3, найдите f(2).", answer: "5" },
//   { type: "question", points: 10, question: "Разложите на множители: x² − 16.", answer: "(x−4)(x+4)" },
//   { type: "question", points: 20, question: "В классе 30 учеников. 40% — девочки. Сколько мальчиков?", answer: "18" },
//   { type: "question", points: 30, question: "Найдите значение: √144 + √25.", answer: "17" },
//   { type: "bankrupt", points: 0, question: "БАНКРОТ", special: "Все баллы команды, которая открыла эту карточку, обнуляются!" },
//   { type: "swap", points: 0, question: "ОБМЕН БАЛЛАМИ", special: "Баллы вашей команды меняются местами с баллами соперников." },
//   { type: "double", points: 0, question: "ДВОЙНОЙ БАЛЛ", special: "Следующий правильный ответ этой команды принесёт в 2 раза больше баллов." },
//   { type: "steal", points: 0, question: "КРАЖА БАЛЛОВ", special: "При правильном ответе команда забирает 10 баллов у соперников." }
// ];
// const cardsData = [
//   // 10 баллов — простые устные вопросы
//   { type: "question", points: 10, question: "Чему равно 2⁵?", answer: "32" },
//   { type: "question", points: 10, question: "Решите устно: 2x = 18", answer: "x = 9" },
//   { type: "question", points: 10, question: "Чему равна сумма углов любого треугольника?", answer: "180°" },
//   { type: "question", points: 10, question: "Раскройте скобки: (a + b)²", answer: "a² + 2ab + b²" },
//   { type: "question", points: 10, question: "Чему равен угол, вертикальный углу в 50°?", answer: "50°" },
//   { type: "question", points: 10, question: "Переведите 50% в обыкновенную дробь.", answer: "1/2" },

//   // 20 баллов — базовые свойства и вычисления в уме
//   { type: "question", points: 20, question: "Чему равен катет, лежащий против угла 30° в прямоугольном треугольнике?", answer: "Половине гипотенузы" },
//   { type: "question", points: 20, question: "Чему равно x⁰ для любого x ≠ 0?", answer: "1" },
//   { type: "question", points: 20, question: "Разложите на множители: x² − 25", answer: "(x − 5)(x + 5)" },
//   { type: "question", points: 20, question: "Чему равен второй смежный угол, если первый равен 100°?", answer: "80°" },
//   { type: "question", points: 20, question: "Как называется график функции y = kx + b?", answer: "Прямая" },
//   { type: "question", points: 20, question: "Найдите 10% от 450.", answer: "45" },

//   // 30 баллов — чуть больше устных рассуждений
//   { type: "question", points: 30, question: "Углы при основании равнобедренного треугольника равны по 50°. Найдите угол при вершине.", answer: "80°" },
//   { type: "question", points: 30, question: "Упростите устно: a³ · a⁴ / a⁵", answer: "a²" },
//   { type: "question", points: 30, question: "Чему равен периметр равностороннего треугольника со стороной 7 см?", answer: "21 см" },
//   { type: "question", points: 30, question: "Назовите точку пересечения графика y = 3x − 4 с осью OY.", answer: "(0; −4)" },

//   // Специальные карточки
//   { type: "bankrupt", points: 0, question: "БАНКРОТ", special: "Все баллы команды, которая открыла эту карточку, обнуляются!" },
//   { type: "swap", points: 0, question: "ОБМЕН БАЛЛАМИ", special: "Баллы вашей команды меняются местами с баллами соперников." },
//   { type: "double", points: 0, question: "ДВОЙНОЙ БАЛЛ", special: "Следующий правильный ответ этой команды принесёт в 2 раза больше баллов." },
//   { type: "steal", points: 0, question: "КРАЖА БАЛЛОВ", special: "При правильном ответе команда забирает 10 баллов у соперников." }
// ];

// const cardsData = [
//   // 10 баллов — базовые понятия и самые простые вопросы
//   { type: "question", points: 10, question: "Какое самое маленькое натуральное число?", answer: "1" },
//   { type: "question", points: 10, question: "Является ли число 0 натуральным?", answer: "Нет" },
//   { type: "question", points: 10, question: "Какое число не относится ни к простым, ни к составным?", answer: "1" },
//   { type: "question", points: 10, question: "Сколько делителей имеет любое простое число?", answer: "Ровно 2 (1 и само число)" },
//   { type: "question", points: 10, question: "Назовите самое маленькое простое число.", answer: "2" },
//   { type: "question", points: 10, question: "Назовите единственное четное простое число.", answer: "2" },

//   // 20 баллов — определение простых/составных чисел и признаков делимости
//   { type: "question", points: 20, question: "Число 15 — простое или составное?", answer: "Составное (делится на 1, 3, 5, 15)" },
//   { type: "question", points: 20, question: "Назовите первые три простых числа.", answer: "2, 3, 5" },
//   { type: "question", points: 20, question: "Число 13 — простое или составное?", answer: "Простое" },
//   { type: "question", points: 20, question: "Как называют число, у которого больше двух делителей?", answer: "Составное" },
//   { type: "question", points: 20, question: "Назовите наименьшее двузначное простое число.", answer: "11" },
//   { type: "question", points: 20, question: "За числом 19 сразу идет простое или составное число?", answer: "Составное (20)" },

//   // 30 баллов — устные задачи и разложение на множители
//   { type: "question", points: 30, question: "Разложите устно число 12 на простые множители.", answer: "2 · 2 · 3 (или 2² · 3)" },
//   { type: "question", points: 30, question: "Может ли произведение двух простых чисел быть простым числом?", answer: "Нет, оно будет составным" },
//   { type: "question", points: 30, question: "Назовите все делители числа 8.", answer: "1, 2, 4, 8" },
//   { type: "question", points: 30, question: "Замените звездочку цифрой, чтобы число 2* было простым: 21, 23 или 25?", answer: "23" },

//   // Специальные карточки
//   { type: "bankrupt", points: 0, question: "БАНКРОТ", special: "Все баллы команды, которая открыла эту карточку, обнуляются!" },
//   { type: "swap", points: 0, question: "ОБМЕН БАЛЛАМИ", special: "Баллы вашей команды меняются местами с баллами соперников." },
//   { type: "double", points: 0, question: "ДВОЙНОЙ БАЛЛ", special: "Следующий правильный ответ этой команды принесёт в 2 раза больше баллов." },
//   { type: "steal", points: 0, question: "КРАЖА БАЛЛОВ", special: "При правильном ответе команда забирает 10 баллов у соперников." }
// ];

// const cardsData = [
//   // 10 баллов — простые вычисления
//   {
//     type: "question",
//     points: 10,
//     question: "Вычислите: −5 · 7",
//     answer: "−35",
//   },

//   {
//     type: "question",
//     points: 10,
//     question: "Вычислите: −4 − (−7)",
//     answer: "3",
//   },

//   {
//     type: "question",
//     points: 10,
//     question: "Вычислите: 8 + (−5)",
//     answer: "3",
//   },

//   { type: "question", points: 10, question: "Вычислите: −6 + 9", answer: "3" },

//   {
//     type: "question",
//     points: 10,
//     question: "Вычислите: −3 · 4",
//     answer: "−12",
//   },

//   {
//     type: "question",
//     points: 10,
//     question: "Вычислите: 24 : (−6)",
//     answer: "−4",
//   },

//   // 20 баллов — несколько действий
//   {
//     type: "question",
//     points: 20,
//     question: "Вычислите: −8 − 5",
//     answer: "−13",
//   },

//   {
//     type: "question",
//     points: 20,
//     question: "Вычислите: −12 + (−7)",
//     answer: "−19",
//   },

//   {
//     type: "question",
//     points: 20,
//     question: "Вычислите: 15 − (−6)",
//     answer: "21",
//   },

//   {
//     type: "question",
//     points: 20,
//     question: "Вычислите: −7 · (−6)",
//     answer: "42",
//   },

//   {
//     type: "question",
//     points: 20,
//     question: "Вычислите: −45 : 9",
//     answer: "−5",
//   },

//   {
//     type: "question",
//     points: 20,
//     question: "Вычислите: 18 : (−3)",
//     answer: "−6",
//   },

//   // 30 баллов — более сложные устные вычисления
//   {
//     type: "question",
//     points: 30,
//     question: "Вычислите: −5 · 7 + 10",
//     answer: "−25",
//   },

//   {
//     type: "question",
//     points: 30,
//     question: "Вычислите: −4 − (−7) · 2",
//     answer: "10",
//   },

//   {
//     type: "question",
//     points: 30,
//     question: "Вычислите: 12 − (−8) − 5",
//     answer: "15",
//   },

//   {
//     type: "question",
//     points: 30,
//     question: "Вычислите: −6 · (−3) − 10",
//     answer: "8",
//   },

//   {
//     type: "question",
//     points: 30,
//     question: "Вычислите: −20 : 5 + 7",
//     answer: "3",
//   },

//   {
//     type: "question",
//     points: 30,
//     question: "Вычислите: −3 · (4 − 9)",
//     answer: "15",
//   },

//   // Специальные карточки
//   {
//     type: "bankrupt",
//     points: 0,
//     question: "БАНКРОТ",
//     special: "Все баллы команды, которая открыла эту карточку, обнуляются!",
//   },

//   {
//     type: "swap",
//     points: 0,
//     question: "ОБМЕН БАЛЛАМИ",
//     special: "Баллы вашей команды меняются местами с баллами соперников.",
//   },

//   {
//     type: "double",
//     points: 0,
//     question: "ДВОЙНОЙ БАЛЛ",
//     special:
//       "Следующий правильный ответ этой команды принесёт в 2 раза больше баллов.",
//   },

//   {
//     type: "steal",
//     points: 0,
//     question: "КРАЖА БАЛЛОВ",
//     special: "При правильном ответе команда забирает 10 баллов у соперников.",
//   },
// ];

const cardsData = [
  // 10 баллов — простые признаки (2, 5, 10) и базовые понятия
  {
    type: "question",
    points: 10,
    question: "Делится ли число 148 на 2?",
    answer: "Да (оканчивается на чётную цифру 8)",
  },
  {
    type: "question",
    points: 10,
    question: "Делится ли число 355 на 5?",
    answer: "Да (оканчивается на 5)",
  },
  {
    type: "question",
    points: 10,
    question: "Какое из чисел делится на 2: 417 или 532?",
    answer: "532",
  },
  {
    type: "question",
    points: 10,
    question: "Назовите наименьшее натуральное число.",
    answer: "1",
  },
  {
    type: "question",
    points: 10,
    question: "Какую цифру нужно подставить вместо * в число 24*, чтобы оно делилось на 5, но не делилось на 10?",
    answer: "5",
  },
  {
    type: "question",
    points: 10,
    question: "Делится ли число 790 на 2 и на 5 одновременно?",
    answer: "Да (оканчивается на 0)",
  },

  // 20 баллов — признаки делимости на 3, 4, 6
  {
    type: "question",
    points: 20,
    question: "Делится ли число 234 на 3?",
    answer: "Да (сумма цифр 2 + 3 + 4 = 9, 9 делится на 3)",
  },
  {
    type: "question",
    points: 20,
    question: "Делится ли число 516 на 4?",
    answer: "Да (последние две цифры образуют 16, а 16 делится на 4)",
  },
  {
    type: "question",
    points: 20,
    question: "Делится ли число 438 на 6?",
    answer: "Да (оно чётное и сумма цифр 4 + 3 + 8 = 15 делится на 3)",
  },
  {
    type: "question",
    points: 20,
    question: "Выберите число, которое делится на 3: 502, 711, 805.",
    answer: "711 (сумма цифр равна 9)",
  },
  {
    type: "question",
    points: 20,
    question: "Делится ли число 1324 на 4?",
    answer: "Да (24 делится на 4)",
  },
  {
    type: "question",
    points: 20,
    question: "Какая из цифр (1, 2 или 3) подойдет вместо *, чтобы число 15* делилось на 6?",
    answer: "6 (или цифра 0, 6; из предложенных вариантов: чётная цифра, дающая сумму делимую на 3, т.е. подходит 6, а из 1, 2, 3 ни одна не подходит — если выбираем из 0, 2, 6, то 0 и 6)",
  },
  {
    type: "question",
    points: 20,
    question: "Запишите наибольшее двузначное число, которое делится на 5.",
    answer: "95",
  },

  // 30 баллов — комбинации признаков и знак делимости на 8
  {
    type: "question",
    points: 30,
    question: "Делится ли число 3120 на 8?",
    answer: "Да (последние три цифры 120 делятся на 8: 120 : 8 = 15)",
  },
  {
    type: "question",
    points: 30,
    question: "Какую наименьшую цифру нужно подставить вместо * в число 41*2, чтобы оно делилось на 3?",
    answer: "2 (сумма цифр 4 + 1 + 2 = 7, ближайшая кратная 3 сумма — 9)",
  },
  {
    type: "question",
    points: 30,
    question: "Делится ли число 5016 на 6?",
    answer: "Да (чётное, сумма цифр 5 + 0 + 1 + 6 = 12 делится на 3)",
  },
  {
    type: "question",
    points: 30,
    question: "Делится ли число 2104 на 8?",
    answer: "Да (последние три цифры 104 делятся на 8: 104 : 8 = 13)",
  },
  {
    type: "question",
    points: 30,
    question: "Найдите число от 20 до 30, которое делится одновременно на 2, 3 и 4.",
    answer: "24",
  },
  {
    type: "question",
    points: 30,
    question: "Какую цифру нужно подставить вместо *, чтобы число 73*0 делилось и на 3, и на 4, и на 5?",
    answer: "2, 5 или 8 (чтобы делилось на 3; на 5 и 4 делится, так как оканчивается на 20, 50 или 80 — из них на 4 делятся 20 и 80, значит * = 2 или 8)",
  },
  {
    type: "question",
    points: 30,
    question: "Верно ли, что если число делится на 8, то оно обязательно делится и на 4?",
    answer: "Да, верно (так как 8 делится на 4)",
  },

  // Специальные карточки
  {
    type: "bankrupt",
    points: 0,
    question: "БАНКРОТ",
    special: "Все баллы команды, которая открыла эту карточку, обнуляются!",
  },
  {
    type: "swap",
    points: 0,
    question: "ОБМЕН БАЛЛАМИ",
    special: "Баллы вашей команды меняются местами с баллами соперников.",
  },
  {
    type: "double",
    points: 0,
    question: "ДВОЙНОЙ БАЛЛ",
    special: "Следующий правильный ответ этой команды принесёт в 2 раза больше баллов.",
  },
  {
    type: "steal",
    points: 0,
    question: "КРАЖА БАЛЛОВ",
    special: "При правильном ответе команда забирает 10 баллов у соперников.",
  },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let redScore = 0;
let blueScore = 0;
let currentTeam = "red";
let currentCard = null;
let timerInterval = null;
let seconds = 120;
let doubleNext = { red: false, blue: false };
let gameOver = false;

const cardsEl = document.getElementById("cards");
const modal = document.getElementById("modal");
const flipCard = document.getElementById("flipCard");
const openBtn = document.getElementById("openBtn");
const checkBtn = document.getElementById("checkBtn");
const answerPanel = document.getElementById("answerPanel");
const timerEl = document.getElementById("timer");
const cardTimerEl = document.getElementById("cardTimer");

function renderCards() {
  cardsEl.innerHTML = "";
  cardsData.forEach((_, i) => {
    const btn = document.createElement("button");
    btn.className = "card";
    btn.textContent = i + 1;
    btn.dataset.index = i;
    btn.addEventListener("click", () => chooseCard(i));
    cardsEl.appendChild(btn);
  });
}

function chooseCard(index) {
  if (gameOver) return;
  const btn = cardsEl.children[index];
  if (btn.classList.contains("used")) return;

  currentCard = index;
  btn.classList.add("used");
  modal.classList.remove("hidden");
  flipCard.classList.remove("flipped");
  openBtn.disabled = false;
  openBtn.classList.remove("hidden");
  answerPanel.classList.add("hidden");
  checkBtn.classList.remove("hidden");

  const data = cardsData[index];
  document.getElementById("cardNumber").textContent = index + 1;
  document.getElementById("cardType").textContent = getTypeLabel(data.type);
  document.getElementById("question").textContent = data.question;
  document.getElementById("pointsText").textContent =
    data.type === "question"
      ? `+${data.points} баллов`
      : "СПЕЦИАЛЬНАЯ КАРТОЧКА";
  document.getElementById("specialText").textContent =
    data.special || `Ответ: ${data.answer || ""}`;
  document
    .getElementById("specialText")
    .classList.toggle("hidden", data.type === "question");

  // Текст кнопки зависит от типа карточки:
  // у вопроса — сначала проверяем ответ, у спецкарточки — сразу закрываем и применяем эффект
  checkBtn.textContent =
    data.type === "question" ? "Проверить ответ" : "Закрыть карточку";

  // Сразу после открытия карточки запускается 2-минутный таймер.
  startTimer();
}

function getTypeLabel(type) {
  return {
    question: "ВОПРОС",
    bankrupt: "⚠ БАНКРОТ",
    swap: "↔ ОБМЕН",
    double: "×2 ДВОЙНОЙ БАЛЛ",
    steal: "★ КРАЖА БАЛЛОВ",
  }[type];
}

function openCard() {
  flipCard.classList.add("flipped");
  openBtn.classList.add("hidden");
}

function showAnswerPanel() {
  const data = cardsData[currentCard];

  // Показываем правильный ответ прямо на обратной стороне карточки,
  // чтобы учитель мог сравнить его с ответом команды.
  if (data.type === "question") {
    document.getElementById("specialText").textContent =
      `Правильный ответ: ${data.answer}`;
    document.getElementById("specialText").classList.remove("hidden");
  } else {
    document.getElementById("specialText").textContent =
      data.special || "Специальная карточка";
    document.getElementById("specialText").classList.remove("hidden");
  }

  answerPanel.classList.remove("hidden");
  checkBtn.classList.add("hidden");
}

function finishCard(correct) {
  clearInterval(timerInterval);
  const data = cardsData[currentCard];

  if (data.type === "question") {
    if (correct) {
      let points = data.points;
      if (doubleNext[currentTeam]) {
        points *= 2;
        doubleNext[currentTeam] = false;
        showMessage(`×2! Команда получает ${points} баллов.`);
      } else {
        showMessage(`+${points} баллов!`);
      }
      addScore(currentTeam, points);
    } else {
      showMessage("Баллы за вопрос не начислены.");
    }
  } else {
    applySpecial(data.type, correct);
  }

  closeModal();
  switchTurn();
  checkEnd();
}

function applySpecial(type, correct) {
  if (type === "bankrupt") {
    setScore(currentTeam, 0);
    showMessage("БАНКРОТ! Баллы команды обнулены.");
  }

  if (type === "swap") {
    [redScore, blueScore] = [blueScore, redScore];
    updateScores();
    showMessage("Баллы команд обменены!");
  }

  if (type === "double") {
    doubleNext[currentTeam] = true;
    showMessage("Следующий правильный ответ — ×2!");
  }

  if (type === "steal") {
    if (correct) {
      const stolen = Math.min(10, getScore(otherTeam()));
      setScore(otherTeam(), getScore(otherTeam()) - stolen);
      addScore(currentTeam, stolen);
      showMessage(`Команда забрала ${stolen} баллов у соперников.`);
    } else {
      showMessage("Кража не сработала.");
    }
  }
}

function addScore(team, points) {
  if (team === "red") redScore += points;
  else blueScore += points;
  updateScores();
}

function setScore(team, value) {
  if (team === "red") redScore = Math.max(0, value);
  else blueScore = Math.max(0, value);
  updateScores();
}

function getScore(team) {
  return team === "red" ? redScore : blueScore;
}

function otherTeam() {
  return currentTeam === "red" ? "blue" : "red";
}

function updateScores() {
  document.getElementById("redScore").textContent = redScore;
  document.getElementById("blueScore").textContent = blueScore;
}

function switchTurn() {
  currentTeam = currentTeam === "red" ? "blue" : "red";
  document.getElementById("turnLabel").textContent =
    currentTeam === "red" ? "КРАСНАЯ" : "СИНЯЯ";
  document.getElementById("turnLabel").style.color =
    currentTeam === "red" ? "#e53935" : "#1976d2";
  resetTimerDisplay();
}

function startTimer() {
  clearInterval(timerInterval);
  seconds = 120;
  updateTimer();

  timerInterval = setInterval(() => {
    seconds--;
    updateTimer();
    if (seconds <= 0) {
      clearInterval(timerInterval);
      showMessage("⏰ Время вышло! Ответ считается неправильным.");

      const data = cardsData[currentCard];
      if (data.type === "question") {
        // Показываем правильный ответ перед закрытием, чтобы команда его видела
        showAnswerPanel();
        setTimeout(() => finishCard(false), 4000);
      } else {
        // Спецкарточка — сразу применяем эффект и закрываем
        finishCard(false);
      }
    }
  }, 1000);
}

function updateTimer() {
  const min = String(Math.floor(seconds / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");
  const value = `${min}:${sec}`;

  timerEl.textContent = value;
  if (cardTimerEl) cardTimerEl.textContent = value;

  timerEl.classList.toggle("warning", seconds <= 60 && seconds > 20);
  timerEl.classList.toggle("danger", seconds <= 20);

  if (cardTimerEl) {
    cardTimerEl.classList.toggle("warning", seconds <= 60 && seconds > 20);
    cardTimerEl.classList.toggle("danger", seconds <= 20);
  }
}

function resetTimerDisplay() {
  clearInterval(timerInterval);
  seconds = 120;
  timerEl.className = "timer";
  timerEl.textContent = "02:00";
  if (cardTimerEl) {
    cardTimerEl.className = "card-timer";
    cardTimerEl.textContent = "02:00";
  }
}

function closeModal() {
  clearInterval(timerInterval);
  modal.classList.add("hidden");
  currentCard = null;
}

function checkEnd() {
  const used = document.querySelectorAll(".card.used").length;
  if (used === cardsData.length) {
    gameOver = true;
    let text = `Игра окончена! Красная: ${redScore}, Синяя: ${blueScore}.`;
    showMessage(text);
    setTimeout(() => {
      alert(`${text}\nСпасибо за игру!`);
    }, 400);
  }
}

function showMessage(text) {
  const el = document.getElementById("message");
  el.textContent = text;
  el.classList.remove("hidden");
  clearTimeout(showMessage.timeout);
  showMessage.timeout = setTimeout(() => el.classList.add("hidden"), 2600);
}

function resetGame() {
  clearInterval(timerInterval);
  redScore = 0;
  blueScore = 0;
  currentTeam = "red";
  currentCard = null;
  doubleNext = { red: false, blue: false };
  gameOver = false;
  updateScores();
  document.getElementById("turnLabel").textContent = "КРАСНАЯ";
  document.getElementById("turnLabel").style.color = "#e53935";
  resetTimerDisplay();
  modal.classList.add("hidden");
  shuffleArray(cardsData);
  renderCards();
}

openBtn.addEventListener("click", openCard);

// Кнопка "Проверить ответ / Закрыть карточку" ведёт себя по-разному
// в зависимости от типа карточки
checkBtn.addEventListener("click", () => {
  const data = cardsData[currentCard];
  if (data.type === "question") {
    showAnswerPanel();
  } else {
    // Спецкарточка — эффект применяется сразу, без выбора "правильно/неправильно"
    finishCard(true);
  }
});

document
  .getElementById("correctBtn")
  .addEventListener("click", () => finishCard(true));
document
  .getElementById("wrongBtn")
  .addEventListener("click", () => finishCard(false));
document.getElementById("closeModal").addEventListener("click", closeModal);
document.getElementById("resetBtn").addEventListener("click", resetGame);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

shuffleArray(cardsData);
renderCards();
updateScores();

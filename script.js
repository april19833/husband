// Список имен и стран для примера
const namesDatabase = {
  "John": "USA, UK",
  "Pedro": "Portugal, Spain",
  "Ivan": "Russia, Ukraine",
  "Mario": "Italy",
  "Lucas": "Brazil",
  "Hiroshi": "Japan"
};

// Ответ ИИ
function respond() {
  const input = document.getElementById('userInput').value;
  const responseElement = document.getElementById('response');

  // Если имя есть в базе
  if (namesDatabase[input]) {
    const response = `The name "${input}" is commonly found in: ${namesDatabase[input]}.`;

    // Выводим на страницу
    responseElement.textContent = response;

    // Преобразуем ответ в речь
    const speech = new SpeechSynthesisUtterance(response);
    speech.lang = 'en-US'; // Английский
    window.speechSynthesis.speak(speech);
  } else {
    const response = `I don't know the origin of the name "${input}". Try another name.`;

    // Выводим на страницу
    responseElement.textContent = response;

    // Преобразуем ответ в речь
    const speech = new SpeechSynthesisUtterance(response);
    speech.lang = 'en-US'; // Английский
    window.speechSynthesis.speak(speech);
  }
}

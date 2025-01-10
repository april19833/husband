function respond() {
  const input = document.getElementById('userInput').value;
  const responseElement = document.getElementById('response');

  // Пример простого ответа
  const response = `Hello! You typed: "${input}"`;

  // Выводим ответ на странице
  responseElement.textContent = response;

  // Преобразуем ответ в речь
  const speech = new SpeechSynthesisUtterance(response);
  speech.lang = 'en-US';  // Устанавливаем язык на английский
  window.speechSynthesis.speak(speech);  // Говорим ответ
}

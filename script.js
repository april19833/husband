function respond() {
  const input = document.getElementById('userInput').value;  // Получаем введённое сообщение
  const responseElement = document.getElementById('response');  // Элемент, куда будет выводиться ответ

  // Пример простого ответа на английском
  const response = `Hello! You typed: "${input}"`;

  // Отображаем ответ на странице
  responseElement.textContent = response;
}

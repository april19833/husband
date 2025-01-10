function respond() {
  const input = document.getElementById('userInput').value;
  const responseElement = document.getElementById('response');

  // Пример простого ответа
  const response = `Hello! You typed: "${input}"`;

  responseElement.textContent = response;
}

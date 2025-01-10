function respond() {
  const input = document.getElementById('userInput').value;
  const responseElement = document.getElementById('response');

  // Заглушка для ответа
  const response = "Hello! I'm your AI Agent. You said: " + input;

  responseElement.textContent = response;
}

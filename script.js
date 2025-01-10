const fetch = require('node-fetch');

// Используйте ваш ключ API, который доступен как переменная окружения
const apiKey = process.env.OPENAI_API_KEY;

// Пример вызова OpenAI API с использованием вашего ключа
async function getResponseFromOpenAI(prompt) {
  const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 100
    })
  });

  const data = await response.json();
  console.log(data);
}

// Пример использования
getResponseFromOpenAI('Hello, AI!').then(response => {
  console.log(response);
});

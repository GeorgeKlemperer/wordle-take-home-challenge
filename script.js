async function generateRandomWord() {
    const apiKey = 'YOUR_API_KEY';
    const url = 'https://random-word-api.herokuapp.com/word?number=1&length=5';
    
    const response = await fetch(url, {
      headers: {
        'X-RapidAPI-Host': 'random-words5.p.rapidapi.com',
        'X-RapidAPI-Key': '749341a367msh5d280212f416564p140e11jsn95fff133322c'
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      const word = data[0];
      return word;
    } else {
      // Handle API error
      return null;
    }
  }
  
  async function run() {
    const randomWord = await generateRandomWord();
    console.log(randomWord);
  }
  
  run();
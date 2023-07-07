async function getRandomWord() {
  const apiUrl = 'https://random-word-api.vercel.app/api?words=1&length=5';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    if (response.ok) {
      const randomWord = data[0];
      console.log(randomWord);
    } else {
      throw new Error('Failed to fetch random word');
    }
  } catch (error) {
    console.error(error);
  }
}

getRandomWord();
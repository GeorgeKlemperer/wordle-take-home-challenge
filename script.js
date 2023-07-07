// Function to get a single random 5-letter word
async function getRandomWord() {
  // API endpoint URL
  const apiUrl = 'https://random-word-api.vercel.app/api?words=1&length=5';

  try {
    // Fetch data from the API
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    // Check if the response is successful
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

// Call the function to get a random word
getRandomWord();
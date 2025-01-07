export function setupTranslator() {
  const translateBtn = document.querySelector('#translateBtn');
  const videoUrlInput = document.querySelector('#videoUrl');
  const targetLangSelect = document.querySelector('#targetLang');
  const resultDiv = document.querySelector('#result');
  const translatedContent = document.querySelector('#translatedContent');

  translateBtn.addEventListener('click', async () => {
    const videoUrl = videoUrlInput.value;
    const targetLang = targetLangSelect.value;

    if (!videoUrl) {
      alert('Please enter a YouTube video URL');
      return;
    }

    try {
      translateBtn.disabled = true;
      translateBtn.textContent = 'Translating...';

      // Extract video ID from URL
      const videoId = extractVideoId(videoUrl);
      
      // In a real application, you would:
      // 1. Call your backend API to fetch YouTube captions
      // 2. Translate the captions using a translation service
      // 3. Return the translated content
      
      // For demo purposes, we'll show a mock translation
      const mockTranslation = await mockTranslateVideo(videoId, targetLang);
      
      // Display results
      resultDiv.classList.remove('hidden');
      translatedContent.innerHTML = mockTranslation
        .map(item => `<p class="text-gray-800">${item.text}</p>`)
        .join('');

    } catch (error) {
      alert('Error translating video: ' + error.message);
    } finally {
      translateBtn.disabled = false;
      translateBtn.textContent = 'Translate Video';
    }
  });
}

function extractVideoId(url) {
  const urlObj = new URL(url);
  const searchParams = new URLSearchParams(urlObj.search);
  return searchParams.get('v');
}

async function mockTranslateVideo(videoId, targetLang) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Mock translation result
  return [
    { text: "This is a mock translation for demonstration purposes." },
    { text: "In a real application, this would contain actual translated captions." },
    { text: "You would need to implement:" },
    { text: "1. YouTube captions API integration" },
    { text: "2. Translation service integration" },
    { text: "3. Proper error handling and rate limiting" }
  ];
}
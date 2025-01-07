import { extractVideoId } from './utils/videoUtils.js';
import { getEnglishCaptions } from './services/captionService.js';
import { handleApiError, ERROR_MESSAGES } from './utils/errorUtils.js';

export function setupTranslator() {
  const translateBtn = document.querySelector('#translateBtn');
  const videoUrlInput = document.querySelector('#videoUrl');
  const resultDiv = document.querySelector('#result');
  const translatedContent = document.querySelector('#translatedContent');

  translateBtn.addEventListener('click', async () => {
    const videoUrl = videoUrlInput.value;
    resultDiv.classList.add('hidden');
    translatedContent.innerHTML = '';

    if (!videoUrl) {
      alert(ERROR_MESSAGES.NO_URL);
      return;
    }

    try {
      translateBtn.disabled = true;
      translateBtn.textContent = 'Getting captions...';

      const videoId = extractVideoId(videoUrl);
      const captions = await getEnglishCaptions(videoId);
      
      resultDiv.classList.remove('hidden');
      translatedContent.innerHTML = captions
        .map(item => `<p class="text-gray-800">${item.text}</p>`)
        .join('');

    } catch (error) {
      alert(handleApiError(error));
    } finally {
      translateBtn.disabled = false;
      translateBtn.textContent = 'Get Captions';
    }
  });
}
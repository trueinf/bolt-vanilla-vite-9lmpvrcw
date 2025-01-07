import { fetchTranscript } from './api.js';
import { ERROR_MESSAGES } from '../utils/errorUtils.js';

export async function getEnglishCaptions(videoId) {
  try {
    const response = await fetchTranscript(videoId);
    
    if (!response.success || !Array.isArray(response.data)) {
      throw new Error(ERROR_MESSAGES.NO_CAPTIONS);
    }

    return response.data;
  } catch (error) {
    if (error.message.includes('server')) {
      throw new Error(ERROR_MESSAGES.SERVER_ERROR);
    }
    throw error;
  }
}
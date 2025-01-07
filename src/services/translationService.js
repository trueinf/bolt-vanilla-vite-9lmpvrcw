import { fetchTranscript } from './api.js';

export async function translateVideo(videoId) {
  try {
    const response = await fetchTranscript(videoId);
    
    if (!response.success || !response.data) {
      throw new Error('Invalid response from server');
    }

    return response.data.map(item => ({
      text: item.text,
      timestamp: item.timestamp
    }));
  } catch (error) {
    console.error('Translation error:', error);
    throw error;
  }
}
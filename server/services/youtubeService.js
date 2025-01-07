import axios from 'axios';
import { RAPID_API_KEY, RAPID_API_HOST } from '../config.js';

export async function getTranscript(videoId) {
  if (!videoId) {
    throw new Error('Video ID is required');
  }

  try {
    const response = await axios.get('https://youtube-transcriptor.p.rapidapi.com/transcript', {
      params: {
        video_id: videoId,
        lang: 'en'
      },
      headers: {
        'X-RapidAPI-Key': RAPID_API_KEY,
        'X-RapidAPI-Host': RAPID_API_HOST
      }
    });

    // The API returns an array directly
    if (!response.data || !Array.isArray(response.data)) {
      throw new Error('Invalid response from YouTube API');
    }

    return response.data;
  } catch (error) {
    console.error('YouTube API Error:', error);
    if (error.response?.status === 404) {
      throw new Error('No captions found for this video');
    }
    throw new Error('Failed to fetch video transcript');
  }
}
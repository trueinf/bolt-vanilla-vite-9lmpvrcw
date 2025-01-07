const API_BASE_URL = 'http://localhost:3000/api';

export async function fetchTranscript(videoId) {
  if (!videoId) {
    throw new Error('Video ID is required');
  }

  try {
    const response = await fetch(`${API_BASE_URL}/transcript/${videoId}`);
    
    // Check if the server is responding
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Server error occurred');
    }

    const data = await response.json();
    
    // Validate response structure
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid response format');
    }

    return data;
  } catch (error) {
    if (!window.navigator.onLine) {
      throw new Error('No internet connection');
    }
    if (error.message === 'Failed to fetch') {
      throw new Error('Cannot connect to server. Please ensure the server is running.');
    }
    throw error;
  }
}
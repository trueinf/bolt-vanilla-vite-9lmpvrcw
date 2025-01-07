// Common error messages
export const ERROR_MESSAGES = {
  NO_URL: 'Please enter a YouTube video URL',
  NO_CAPTIONS: 'No English captions found for this video',
  INVALID_URL: 'Invalid YouTube URL',
  SERVER_ERROR: 'Server error: Please make sure the server is running and try again.',
  NETWORK_ERROR: 'Network error: Please check your internet connection.',
};

export function handleApiError(error) {
  if (!error) return ERROR_MESSAGES.SERVER_ERROR;
  
  // Log error for debugging
  console.error('API Error:', error);
  
  return error.message || ERROR_MESSAGES.SERVER_ERROR;
}
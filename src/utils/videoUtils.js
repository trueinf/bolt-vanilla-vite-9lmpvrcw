export function extractVideoId(url) {
  try {
    const urlObj = new URL(url);
    const searchParams = new URLSearchParams(urlObj.search);
    return searchParams.get('v');
  } catch (error) {
    throw new Error('Invalid YouTube URL');
  }
}
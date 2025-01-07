import express from 'express';
import { getTranscript } from '../services/youtubeService.js';

const router = express.Router();

router.get('/:videoId', async (req, res) => {
  try {
    const { videoId } = req.params;
    
    if (!videoId) {
      return res.status(400).json({ error: 'Video ID is required' });
    }

    const transcript = await getTranscript(videoId);
    res.json({ success: true, data: transcript });
  } catch (error) {
    console.error('Transcript error:', error.message);
    res.status(500).json({ 
      success: false, 
      error: error.message || 'Failed to fetch transcript' 
    });
  }
});

export default router;
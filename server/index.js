import express from 'express';
import cors from 'cors';
import transcriptRoutes from './routes/transcriptRoutes.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/transcript', transcriptRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
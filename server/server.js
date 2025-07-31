import dotenv from 'dotenv';
dotenv.config();
console.log('API Key Loaded:', process.env.OPENAI_API_KEY);

import express, { json } from 'express';
import cors from 'cors';
import { OpenAI } from 'openai';

const app = express();
app.use(cors());
app.use(json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/ask', async (req, res) => {
  const { message } = req.body;

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: `You are a helpful assistant who knows everything about Ram, a Full Stack Developer passionate about React.js, Tailwind CSS, MERN stack, and solving real-world problems with technology.`,
      },
      {
        role: 'user',
        content: message,
      },
    ],
  });

  res.json({ reply: response.choices[0].message.content });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
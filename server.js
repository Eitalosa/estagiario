require('dotenv').config();
const express = require('express');
const { Configuration, OpenAIApi } = require('openai');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }]
    });
    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to communicate with OpenAI API' });
  }
});

if (require.main === module) {
  app.listen(port, () =>
    console.log(`Server listening on http://localhost:${port}`)
  );
}

module.exports = app;

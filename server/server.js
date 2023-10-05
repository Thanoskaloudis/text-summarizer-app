const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
const TfIdf = natural.TfIdf;
const tfidf = new TfIdf();

app.use(bodyParser.json());

app.post('/summarize', (req, res) => {
  const text = req.body.text;
  const words = tokenizer.tokenize(text);

  words.forEach((word) => {
    tfidf.addDocument(words);
  });

  const numSentencesToKeep = Math.ceil(0.3 * words.length);
  const selectedSentences = [];

  tfidf.listTerms(0).forEach((item) => {
    if (selectedSentences.length < numSentencesToKeep) {
      selectedSentences.push(item.term);  
    }
  });

  const summarizedText = selectedSentences.join(' ');

  res.json({ summary: summarizedText });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

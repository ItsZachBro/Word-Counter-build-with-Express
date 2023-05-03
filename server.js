const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3210;

app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());

app.post("/count", (req, res) => {
  const inputText = req.body.inputText;
  const words = inputText.trim().split(/\s+/);
  const wordCount = words.length;

  const vowels = "aeiou";
  let vowelCount = 0;
  let consonantCount = 0;

  for (let char of inputText.toLowerCase()) {
    if (char >= "a" && char <= "z") {
      if (vowels.includes(char)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  }

  res.json({ wordCount, vowelCount, consonantCount });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

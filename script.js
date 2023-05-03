document.getElementById("text-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const textInput = document.getElementById("text-input");
    const inputText = textInput.value;
    const results = document.getElementById("results");
  
    if (inputText.trim() === "") {
      results.textContent = "Please enter some text.";
    } else {
      try {
        const response = await fetch("/count", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inputText }),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
  
        const { wordCount, vowelCount, consonantCount } = await response.json();
  
        results.innerHTML = `
          Word Count: ${wordCount}<br>
          Vowel Count: ${vowelCount}<br>
          Consonant Count: ${consonantCount}
        `;
      } catch (error) {
        console.error("Error fetching counts:", error);
        results.textContent = "Error fetching counts.";
      }
    }
  });
  
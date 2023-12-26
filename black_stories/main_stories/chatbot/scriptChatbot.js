function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    if(message) {
        // Add user message to dialogue window
        const dialogueWindow = document.getElementById('dialogueWindow');
        const userDiv = document.createElement('div');
        userDiv.textContent = `User: ${message}`;
        userDiv.className = 'user-message';
        dialogueWindow.appendChild(userDiv);
        
        // Simulate a ChatGPT response
        const botResponse = getBotResponse(message); // Implement this based on selected story and rules
        const botDiv = document.createElement('div');
        botDiv.textContent = `ChatGPT: ${botResponse}`;
        botDiv.className = 'bot-message';
        dialogueWindow.appendChild(botDiv);

        // Auto-scroll to latest message
        dialogueWindow.scrollTop = dialogueWindow.scrollHeight;

        // Clear the input
        input.value = '';
    }
}


// Global variable to store the solution for the selected story
var storySolution = ""; 

// Function to fetch story solution from the server
function fetchStorySolution(storyId) {
    // Fetch the solution for the given storyId from the "main_stories" folder
    // Set the fetched solution to the global variable "storySolution"
    // This might involve making an HTTP GET request to your server where the solutions are stored
}

function getBotResponse(message) {
    // Ensure the message is a yes/no type question
    if (!isYesNoQuestion(message)) {
        return "Please ask a yes/no question.";
    }

    // Call OpenAI's ChatGPT API using the API key and user's message
    // For demonstration purposes, pseudocode is used here
    fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY' // Replace with your actual API key
        },
        body: JSON.stringify({
            prompt: `Given the solution: "${storySolution}". Question: "${message}"`, // Construct the prompt
            max_tokens: 50 // Adjust based on your needs
        })
    })
    .then(response => response.json())
    .then(data => {
        const reply = data.choices[0].text.trim(); // Get the response from the API
        return interpretResponse(reply); // Interpret the reply based on your rules
    })
    .catch(error => {
        console.error('Error:', error);
        return "Error getting response.";
    });
}

function isYesNoQuestion(message) {
    // Implement logic to determine if the message is a yes/no question
    // This might involve checking if it ends with a question mark, etc.
    return true; // Placeholder
}

function interpretResponse(reply) {
    // Compare reply with storySolution and apply your logic to determine the final response
    // Return "YES", "NO", "IRRELEVANT", or instruct for yes/no question based on comparison
    return "YES"; // Placeholder
}

// Initialize or fetch the story solution when the page loads or when a new story is selected
fetchStorySolution(selectedStoryId);

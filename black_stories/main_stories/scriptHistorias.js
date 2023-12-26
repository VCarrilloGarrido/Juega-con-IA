let selectedStoryId = null; // Variable to hold the selected story ID

// Function to handle story selection
function selectStory(storyId) {
    selectedStoryId = storyId; // Set the selected story ID

    // Enable the JUGAR button
    const jugarButton = document.getElementById('playButton');
    jugarButton.disabled = false; // Enable the button

    // Optionally, provide visual feedback for selected story
    highlightSelectedStory(storyId);
}

// Function to visually highlight the selected story
function highlightSelectedStory(storyId) {
    // Remove highlight from all stories
    document.querySelectorAll('.story').forEach(story => {
        story.classList.remove('selected');
    });

    // Add highlight to the selected story
    const selectedStory = document.querySelector(`.story[onclick="selectStory(${storyId})"]`);
    if (selectedStory) {
        selectedStory.classList.add('selected'); // Add a 'selected' class to highlight
    }
}

// Function to redirect to the chat page
function redirectToChat() {
    // Only redirect if a story is selected
    if (selectedStoryId !== null) {
        window.location.href = 'chatbot/chat.html';
    }
}

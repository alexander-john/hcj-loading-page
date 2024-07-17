let loadingTextInterval;
let loadingText = document.getElementById('loadingText');
let displayText = document.getElementById('displayText');

function startLoadingAnimation() {
    let dots = 0;
    loadingTextInterval = setInterval(() => {
        dots = (dots % 3) + 1;
        loadingText.textContent = 'Loading' + '.'.repeat(dots);
    }, 500); // Change dots every 0.5 second
}

async function loadText() {
    try {
        // Simulating an async operation with a 2-second delay
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Hello World');
            }, 2000);
        });
    } catch (error) {
        // Handle error (if any)
        console.error('Error loading text:', error);
        return 'Failed to load text';
    }
}

window.addEventListener('click', async function() {
    clearInterval(loadingTextInterval); // Stop the loading animation
    loadingText.style.display = 'none'; // Hide loading text
    displayText.textContent = 'Loading...'; // Temporary text
    const text = await loadText(); // Wait for async operation
    displayText.textContent = text; // Display the result
});

// Start the loading animation
startLoadingAnimation();

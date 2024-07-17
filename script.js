let loadingTextInterval;
let loadingText = document.getElementById('loadingText');
let displayText = document.getElementById('displayText');
let clicked = false;

function startLoadingAnimation() {
    let dots = 0;
    loadingTextInterval = setInterval(() => {
        dots = (dots % 3) + 1;
        loadingText.textContent = 'Loading' + '.'.repeat(dots);
    }, 500); // Change dots every 0.5 second
}

function displayHelloWorld() {
    if (!clicked) {
        clicked = true;
        clearInterval(loadingTextInterval); // Stop the loading animation
        loadingText.style.display = 'none'; // Hide loading text
        displayText.textContent = 'Hello World'; // Display the result
    }
}

window.addEventListener('click', displayHelloWorld);

// Start the loading animation
startLoadingAnimation();

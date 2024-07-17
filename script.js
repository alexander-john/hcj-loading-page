let loadingTextInterval;
let loadingDots = document.getElementById('loadingDots');
let displayText = document.getElementById('displayText');
let clicked = false;

function startLoadingAnimation() {
    let dots = 0;
    loadingTextInterval = setInterval(() => {
        dots = (dots % 3) + 1;
        loadingDots.textContent = '.'.repeat(dots);
    }, 500); // Change dots every 0.5 second
}

function displayHelloWorld() {
    if (!clicked) {
        clicked = true;
        clearInterval(loadingTextInterval); // Stop the loading animation
        document.getElementById('loadingText').style.display = 'none'; // Hide loading text
        displayText.textContent = 'Hello World'; // Display the result
    }
}

window.addEventListener('click', displayHelloWorld);

// Start the loading animation
startLoadingAnimation();

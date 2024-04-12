let timer; // Timer variable
let running = false; // Flag to track if stopwatch is running
let seconds = 0, minutes = 0, hours = 0; // Initial time values
let lapCounter = 1; // Counter for lap times

function startStop() {
  if (running === false) {
    start(); // Start the stopwatch
    document.getElementById("startStopBtn").innerHTML = "Stop";
    document.getElementById("lapBtn").disabled = false; // Enable lap button
  } else {
    stop(); // Stop the stopwatch
    document.getElementById("startStopBtn").innerHTML = "Start";
    document.getElementById("lapBtn").disabled = true; // Disable lap button when stopwatch is stopped
  }
}

function start() {
  running = true;
  timer = setInterval(updateDisplay, 1000); // Update display every second
}

function stop() {
  running = false;
  clearInterval(timer); // Stop the timer
}

function reset() {
  stop(); // Stop the stopwatch
  seconds = 0; minutes = 0; hours = 0; // Reset time values
  lapCounter = 1; // Reset lap counter
  updateDisplay(); // Update the display
  document.getElementById("startStopBtn").innerHTML = "Start";
  document.getElementById("lapBtn").disabled = true; // Disable lap button
  document.getElementById("lapList").innerHTML = ""; // Clear lap list
}

function recordLap() {
  let lapTime = document.getElementById("display").innerHTML; // Get current display time
  let lapItem = document.createElement("li"); // Create list item for lap
  lapItem.innerHTML = "Lap " + lapCounter + ": " + lapTime; // Set lap time text
  document.getElementById("lapList").appendChild(lapItem); // Add lap time to lap list
  lapCounter++; // Increment lap counter
}

function updateDisplay() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  // Format time values to always have two digits
  let displaySeconds = seconds < 10 ? "0" + seconds : seconds;
  let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  let displayHours = hours < 10 ? "0" + hours : hours;

  // Update the display
  document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

let timeFormat = "12";  // Default 12-hour format
let theme = "fullydark";  // Default theme
let fontSize = 40;  // Default font size
let fontFamily = "Ubuntu";  // Default font family
let bgImage = "";  // Default background image (none)
let showSeconds = true;  // Default to showing seconds
let settingsOpen = false;  // Tracks whether settings are open

// Function to update the clock every second
function updateClock() {
  const clock = document.getElementById('clock');
  const currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  // Format time based on the selected format
  if (timeFormat === "12") {
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    clock.innerHTML = `${hours}:${padZero(minutes)}${showSeconds ? `:${padZero(seconds)}` : ''} ${ampm}`;
  } else {
    clock.innerHTML = `${padZero(hours)}:${padZero(minutes)}${showSeconds ? `:${padZero(seconds)}` : ''}`;
  }

  // Apply theme and font size
  document.body.className = theme;
  clock.style.fontSize = `${fontSize}px`;
  clock.style.fontFamily = fontFamily;

  // Apply background image
  if (bgImage) {
    document.body.style.backgroundImage = `url(${bgImage})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
  } else {
    document.body.style.backgroundImage = 'none';
  }
}

// Add leading zero to single digits
function padZero(number) {
  return number < 10 ? `0${number}` : number;
}

// Toggle settings visibility
function toggleSettings() {
  const settings = document.getElementById('settings');
  settingsOpen = !settingsOpen; // Toggle the state
  settings.style.display = settingsOpen ? "block" : "none";
}

// Update settings based on user input
document.getElementById('timeFormat').addEventListener('change', (e) => {
  timeFormat = e.target.value;
  updateClock();
});

document.getElementById('theme').addEventListener('change', (e) => {
  theme = e.target.value;
  updateClock();
});

document.getElementById('fontSize').addEventListener('input', (e) => {
  fontSize = e.target.value;
  updateClock();
});

document.getElementById('fontFamily').addEventListener('change', (e) => {
  fontFamily = e.target.value;
  updateClock();
});

document.getElementById('bgImage').addEventListener('change', (e) => {
  bgImage = e.target.value;
  updateClock();
});

document.getElementById('showSeconds').addEventListener('change', (e) => {
  showSeconds = e.target.checked;
  updateClock();
});

// Initialize the clock on page load and update every second
setInterval(updateClock, 1000);
updateClock();

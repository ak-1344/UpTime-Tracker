const uptimeElement = document.getElementById('uptime');

// Path to the uptime data file (adjust if serving via a server later)
const filePath = '../uptime_data.txt';

async function fetchBootTime() {
  try {
    const response = await fetch(filePath);
    const text = await response.text();

    // Log the raw file data for debugging
    console.log('Raw file data:', text);

    // Parse the date and time from the file
    const bootDate = new Date(text.trim());

    // Check if the date was valid
    if (bootDate instanceof Date && !isNaN(bootDate)) {
      startUptimeClock(bootDate);
    } else {
      uptimeElement.textContent = 'Invalid boot time data.';
    }
  } catch (err) {
    uptimeElement.textContent = 'Unable to read boot time file.';
  }
}

function startUptimeClock(bootDate) {
  function updateClock() {
    const currentTime = new Date();
    const diff = currentTime - bootDate; // Difference in milliseconds

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Format the uptime as DD:HH:MM:SS
    const formattedUptime = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    uptimeElement.textContent = formattedUptime;
  }

  updateClock();
  setInterval(updateClock, 1000); // Update every second
}

// Start fetching boot time once page is loaded
window.onload = fetchBootTime;

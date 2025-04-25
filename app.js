// Replace this with the actual URL to your Azure Function or blob endpoint
const ALERT_API_URL = "https://cloudtopiafunc32462.azurewebsites.net/api/getalerts";

async function fetchAlerts() {
  try {
    const response = await fetch(ALERT_API_URL);
    const alerts = await response.json();
    const container = document.getElementById('alerts');

    if (alerts.length === 0) {
      container.innerHTML = "No active alerts.";
      return;
    }

    container.innerHTML = alerts.map(a => `<p>⚠️ ${a.message}</p>`).join("");
  } catch (error) {
    document.getElementById('alerts').innerHTML = "Error fetching alerts.";
    console.error(error);
  }
}

fetchAlerts();
setInterval(fetchAlerts, 60000); // Refresh every minute

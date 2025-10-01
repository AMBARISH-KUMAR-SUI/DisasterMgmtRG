function sendAlert() {
  alert("✅ Alert sent to all users!");
}

function runDiagnostics() {
  alert("🧪 System diagnostics complete. All systems are stable.");
}

function clearLogs() {
  alert("🧹 All system logs have been cleared.");
}

// Simulate map loading
window.onload = function () {
  const map = document.getElementById("map");
  setTimeout(() => {
    map.innerHTML = "<p style='text-align:center;'>🗺️ Map interface ready</p>";
  }, 1500);
};
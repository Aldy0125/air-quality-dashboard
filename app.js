const data = [
  { day: "Hari ini", aqi: 56, temp: 29 },
  { day: "Sel", aqi: 57, temp: 32 },
  { day: "Rab", aqi: 58, temp: 33 },
  { day: "Kam", aqi: 54, temp: 32 },
  { day: "Jum", aqi: 42, temp: 32 },
  { day: "Sab", aqi: 40, temp: 33 },
  { day: "Min", aqi: 44, temp: 33 }
];

function getStatus(aqi) {
  return aqi <= 50 ? "baik" : "sedang";
}

// TABLE
let html = "";
data.forEach(d => {
  html += `
    <div class="row">
      <div>${d.day}</div>
      <div class="aqi ${getStatus(d.aqi)}">${d.aqi}</div>
      <div>${d.temp}°C</div>
    </div>
  `;
});

document.getElementById("data").innerHTML = html;

// SUMMARY
const avg = (data.reduce((a,b) => a + b.aqi, 0) / data.length).toFixed(1);
const max = Math.max(...data.map(d => d.aqi));

document.getElementById("avg").innerText = avg;
document.getElementById("max").innerText = max;

// CHART
const labels = data.map(d => d.day);
const values = data.map(d => d.aqi);

new Chart(document.getElementById("chart"), {
  type: "line",
  data: {
    labels: labels,
    datasets: [{
      label: "Tren AQI",
      data: values,
      borderWidth: 3,
      tension: 0.3
    }]
  }
});

new Chart(document.getElementById("chartBar"), {
  type: "bar",
  data: {
    labels: labels,
    datasets: [{
      label: "Perbandingan AQI",
      data: values
    }]
  }
});

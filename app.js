function getStatus(aqi) {
  if (aqi <= 50) return "baik";
  if (aqi <= 100) return "kurang";
  return "buruk";
}

function getStatusLabel(aqi) {
  if (aqi <= 50) return "Baik";
  if (aqi <= 100) return "Kurang Baik";
  return "Buruk";
}

const data = [
  { day: "Hari ini", aqi: 56 },
  { day: "Sel", aqi: 57 },
  { day: "Rab", aqi: 58 },
  { day: "Kam", aqi: 54 },
  { day: "Jum", aqi: 42 },
  { day: "Sab", aqi: 40 },
  { day: "Min", aqi: 44 }
];

// TABLE
let html = "";
data.forEach(d => {
  html += `
    <div class="row">
      <div>${d.day}</div>
      <div class="aqi ${getStatus(d.aqi)}">${d.aqi}</div>
    </div>
  `;
});
document.getElementById("data").innerHTML = html;

// SUMMARY
const avg = (data.reduce((a,b) => a + b.aqi, 0) / data.length).toFixed(1);
const max = Math.max(...data.map(d => d.aqi));

document.getElementById("avg").innerText = avg;
document.getElementById("max").innerText = max;

const badges = document.querySelectorAll(".badge");
badges[0].innerText = getStatusLabel(avg);
badges[1].innerText = getStatusLabel(max);

badges[0].classList.add(getStatus(avg));
badges[1].classList.add(getStatus(max));

// CHART FIX
new Chart(document.getElementById("chart"), {
  type: "line",
  data: {
    labels: data.map(d => d.day),
    datasets: [{
      label: "AQI",
      data: data.map(d => d.aqi),
      borderColor: "#38bdf8",
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});
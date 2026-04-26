// STATUS CLASS
function getStatus(aqi) {
  if (aqi <= 50) return "baik";
  if (aqi <= 100) return "kurang";
  return "buruk";
}

// LABEL STATUS
function getStatusLabel(aqi) {
  if (aqi <= 50) return "Baik";
  if (aqi <= 100) return "Kurang Baik";
  return "Buruk";
}

// FETCH DATA
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { day: "Hari ini", aqi: 56 },
        { day: "Sel", aqi: 57 },
        { day: "Rab", aqi: 58 },
        { day: "Kam", aqi: 54 },
        { day: "Jum", aqi: 42 },
        { day: "Sab", aqi: 40 },
        { day: "Min", aqi: 44 }
      ]);
    }, 500);
  });
}

// MAIN
fetchData().then(data => {

  //  TABLE 
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

  // ================= SUMMARY =================
  const avg = (data.reduce((a,b) => a + b.aqi, 0) / data.length).toFixed(1);
  const max = Math.max(...data.map(d => d.aqi));

  document.getElementById("avg").innerText = avg;
  document.getElementById("max").innerText = max;

  const badges = document.querySelectorAll(".badge");

  if (badges.length >= 2) {
    badges[0].innerText = getStatusLabel(Number(avg));
    badges[1].innerText = getStatusLabel(max);

    badges[0].classList.add(getStatus(Number(avg)));
    badges[1].classList.add(getStatus(max));
  }

  // ================= WARNA CHART DINAMIS =================
  const avgNum = Number(avg);
  let chartColor = "#22c55e"; // hijau

  if (avgNum > 50 && avgNum <= 100) chartColor = "#fbbf24"; // kuning
  if (avgNum > 100) chartColor = "#ef4444"; // merah

  // ================= CHART =================
  new Chart(document.getElementById("chart"), {
    type: "line",
    data: {
      labels: data.map(d => d.day),
      datasets: [{
        label: "AQI",
        data: data.map(d => d.aqi),

        borderColor: chartColor,
        borderWidth: 3,

        pointBackgroundColor: chartColor,
        pointBorderColor: "#fff",
        pointRadius: 5,
        pointHoverRadius: 7,

        tension: 0.4,
        fill: true,
        backgroundColor: chartColor + "33"
      }]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,

      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#cbd5f5",
            font: { size: 12 }
          }
        },
        tooltip: {
          backgroundColor: "#1e293b",
          titleColor: chartColor,
          bodyColor: "#fff",
          borderColor: chartColor,
          borderWidth: 1,
          padding: 10
        }
      },

      scales: {
        x: {
          grid: { display: false },
          ticks: {
            color: "#94a3b8",
            font: { size: 12 }
          }
        },
        y: {
          grid: {
            color: "rgba(255,255,255,0.05)"
          },
          ticks: {
            color: "#94a3b8",
            font: { size: 12 },
            stepSize: 5
          },
          beginAtZero: false
        }
      }
    }
  });

});

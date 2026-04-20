// =====================
// SIMULASI FETCH API
// =====================
function getDataFromAPI() {
  return new Promise(resolve => {
    resolve([
      { day: "Hari ini", aqi: 56, temp: 29 },
      { day: "Sel", aqi: 57, temp: 32 },
      { day: "Rab", aqi: 58, temp: 33 },
      { day: "Kam", aqi: 54, temp: 32 },
      { day: "Jum", aqi: 42, temp: 32 },
      { day: "Sab", aqi: 40, temp: 33 },
      { day: "Min", aqi: 44, temp: 33 }
    ]);
  });
}

// STATUS AQI
function getStatus(aqi) {
  return aqi <= 50 ? "baik" : "sedang";
}

// MAIN
getDataFromAPI().then(data => {

  // =====================
  // SUMMARY CARD
  // =====================
  const avg = (data.reduce((sum, d) => sum + d.aqi, 0) / data.length).toFixed(1);
  const max = Math.max(...data.map(d => d.aqi));

  document.getElementById("summary").innerHTML = `
    <div>
      <p>Rata-rata AQI</p>
      <b>${avg}</b>
    </div>
    <div>
      <p>AQI Tertinggi</p>
      <b>${max}</b>
    </div>
  `;

  // =====================
  // DATA LIST
  // =====================
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

  // =====================
  // CHART DATA
  // =====================
  const labels = data.map(d => d.day);
  const values = data.map(d => d.aqi);

  // LINE CHART
  new Chart(document.getElementById('chartLine'), {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Tren AQI',
        data: values,
        borderWidth: 2,
        tension: 0.3
      }]
    }
  });

  // BAR CHART
  new Chart(document.getElementById('chartBar'), {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Perbandingan AQI',
        data: values
      }]
    }
  });

});
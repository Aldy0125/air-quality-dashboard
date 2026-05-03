# Dashboard Kualitas Udara – Medan

Dashboard berbasis web untuk memvisualisasikan data Air Quality Index (AQI) Kota Medan secara interaktif menggunakan teknologi frontend modern.

---

## Deskripsi

Proyek ini dikembangkan sebagai bagian dari mata kuliah **Teknik Visualisasi Interaktif**.
Dashboard ini menampilkan data kualitas udara dalam bentuk tabel, ringkasan, dan grafik sehingga lebih mudah dipahami oleh pengguna.

---

## Fitur Utama

* **Grafik Line** – Menampilkan tren AQI dari waktu ke waktu
* **Grafik Bar** – Membandingkan nilai AQI antar hari
* **Tabel Data** – Menampilkan data harian AQI dan suhu
* **Card Ringkasan** – Menampilkan rata-rata dan nilai maksimum AQI
* **Tampilan Modern** – Desain bersih dengan layout berbasis card

---

## Teknologi yang Digunakan

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Chart.js

---

## Struktur Proyek

```
air-quality-dashboard/
│── index.html
│── app.js
│── README.md
```

---

## Cara Menjalankan

1. Clone repository:

```
git clone https://github.com/Aldy0125
```

2. Masuk ke folder:

```
cd air-quality-dashboard
```

3. Jalankan:

* Buka file `index.html` di browser
* atau gunakan **Live Server** di VS Code

---

## Sumber Data

Data yang digunakan merupakan data AQI berdasarkan pengamatan nyata, namun pada implementasi menggunakan simulasi API (JavaScript Promise) untuk keperluan pembelajaran frontend.

---

## Penjelasan Visualisasi

* **Grafik Line** digunakan untuk menunjukkan tren perubahan AQI karena data bersifat time-series (berdasarkan waktu).
* **Grafik Bar** digunakan untuk membandingkan nilai AQI antar hari agar perbedaan terlihat jelas secara visual.

---

## Tujuan Pembelajaran

* Memahami peran frontend dalam visualisasi data
* Mengambil dan menampilkan data dari API
* Menentukan jenis grafik yang sesuai
* Mendesain dashboard yang informatif dan interaktif

---

## Pembuat

**Aldy Putra Manurung,**

---

## Pengembangan Selanjutnya

Proyek ini dapat dikembangkan lebih lanjut dengan:

* Integrasi API kualitas udara real-time
* Penambahan peta interaktif (Leaflet)
* Update data secara otomatis

---

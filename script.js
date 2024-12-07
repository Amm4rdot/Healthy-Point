// Fungsi untuk menampilkan tab berdasarkan kategori yang dipilih
function showTab(tabName) {
    var tabs = document.getElementsByClassName('tabContent');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }
    document.getElementById(tabName + 'Tab').style.display = 'block';
}

// Fungsi untuk keluar dari website
function exitWebsite() {
    window.close();
}

// Fungsi untuk menghitung BMI dan BMR
function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var bmi = weight / ((height / 100) * (height / 100));

    var gender = prompt("Masukkan jenis kelamin (pria/wanita): ").toLowerCase();
    var bmr;
    if (gender === "pria") {
        bmr = 1 * weight * 24;
    } else if (gender === "wanita") {
        bmr = 0.9 * weight * 24;
    }

    var resultText = "BMI Anda: " + bmi.toFixed(2) + "<br>BMR Anda: " + bmr.toFixed(2);
    document.getElementById('result').innerHTML = resultText;
}

// Fungsi untuk menampilkan tugas harian
function showMission() {
    var missionHTML = `
        <h3>Misi Harian</h3>
        <p>1. Lakukan 30 menit olahraga - Poin: 10</p>
        <p>2. Meditasi selama 15 menit - Poin: 5</p>
        <button onclick="claimPoints()">Klaim Poin</button>
    `;
    document.getElementById('mission').innerHTML = missionHTML;
}

// Fungsi untuk mengklaim poin
function claimPoints() {
    alert("Poin berhasil diklaim!");
}


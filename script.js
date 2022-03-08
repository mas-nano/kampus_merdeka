class Gempa {
  constructor(lokasi, skala) {
    this.lokasi = lokasi;
    this.skala = skala;
  }
  dampak() {
    if (this.skala >= 0 && this.skala <= 2) this.dampak = "Tidak terasa";
    else if (this.skala > 2 && this.skala <= 4)
      this.dampak = "Bangunan retak-retak";
    else if (this.skala > 4 && this.skala <= 6) this.dampak = "Bangunan roboh";
    else this.dampak = "Bangunan roboh dan berpotensi tsunami";
    let container = document.getElementById("info");
    container.innerHTML += `
            <div class="card">
                <p>Lokasi Gempa: ${this.lokasi}</p>
                <p>Skala: ${this.skala}SR</p>
                <p>Dampak: ${this.dampak}</p>
            </div>
        `;
  }
}
const lokasiGempa = {
  "Hawaii": 2.8, //prettier-ignore
  "Hawaii": 2.7, //prettier-ignore
  "Haiti": 4.6, //prettier-ignore
  "Jepang": 4.5, //prettier-ignore
  "California": 2.9, //prettier-ignore
  "Puerto Rico": 2.5,
  "Timor Timur": 5.5,
  "California": 2.8, //prettier-ignore
  "Texas": 2.9, //prettier-ignore
  "Indonesia": 4.9, //prettier-ignore
};
for (l in lokasiGempa) {
  let gempa = new Gempa(l, lokasiGempa[l]);
  gempa.dampak();
}

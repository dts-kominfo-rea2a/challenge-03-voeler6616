// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (arrData) => {
  let listBelanja = [];

  // for (const belanjaan of dataBelanjaan) {
  //   listBelanja.push(`- ${belanjaan.nama} x ${belanjaan.kuantitas}`);
  // }
  for ( let counter = 0; counter < arrData.length; counter++ ) {
    listBelanja.push(`- ${arrData[counter].nama} x ${arrData[counter].kuantitas}`);
  }
  return listBelanja;
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = ( price ) => {
  let total = 0;
  // for (const belanjaan of dataBelanjaan) {
  //   let hargaBarang = belanjaan.harga * belanjaan.kuantitas;

  //   total += hargaBarang;
  // }
  for ( let counter = 0; counter < price.length; counter++ ) {
    let hargaBarang = price[counter].harga * price[counter].kuantitas;

    total += hargaBarang;
  }
  return total;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};

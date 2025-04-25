const tombolOptions = document.querySelectorAll('.option .kepencet');

// Elemen-elemen yang akan diubah
const title = document.querySelector('.BSP');
const price = document.querySelector('.price');
const desc = document.querySelector('.desc');
const fitur1 = document.querySelector('.fitur1');
const fitur2 = document.querySelector('.fitur2');
const icon1 = document.querySelector('.icon1');
const icon2 = document.querySelector('.icon2');
const addToCartBtn = document.querySelector('.addtocart');
const toast = document.getElementById('toast');
  

// Data paket (bisa kamu kembangkan)
const dataPaket = {
  Basic: {
    title: 'BASIC',
    price: '$60',
    desc: 'Up to 50 creative & professional  icons + one color versions/themes',
    fitur1: 'Included source files',
    fitur2: 'Converted to responsive components',
    icon1: '/Centang.svg',           // <— tanda silang
    icon2: '/Silang.svg',
  },
  Standard: {
    title: 'STANDARD',
    price: '$120',
    desc: 'Up to 100 creative & professional icons + two color versions/themes per month',
    fitur1: 'Included source files',
    fitur2: 'Converted to responsive components',
    icon1: '/Centang.svg',           // <— tanda silang
    icon2: '/Centang.svg',
  },
  Premium: {
    title: 'PREMIUM',
    price: '$180',
    desc: 'Up to 200 creative & professional  icons + four color versions/themes',
    fitur1: 'Included source files',
    fitur2: 'Converted to responsive components',
    icon1: '/Centang.svg',           // <— tanda silang
    icon2: '/Centang.svg',
  },
};

tombolOptions.forEach(tombol => {
  tombol.addEventListener('click', () => {
    // Hapus class 'active' dari semua tombol
    tombolOptions.forEach(btn => btn.classList.remove('active'));

    // Tambahkan class 'active' ke tombol yang diklik
    tombol.classList.add('active');

    // Ambil text tombol (Basic, Standard, Premium)
    const paket = tombol.textContent;

    // Update isi text berdasarkan paket
    title.textContent = dataPaket[paket].title;
    price.textContent = dataPaket[paket].price;
    desc.textContent = dataPaket[paket].desc;
    fitur1.textContent = dataPaket[paket].fitur1;
    fitur2.textContent = dataPaket[paket].fitur2;
    icon1.src = dataPaket[paket].icon1;
    icon2.src = dataPaket[paket].icon2;
  });
});


addToCartBtn.addEventListener('click', () => {
  toast.classList.add('show');

  // Hilangkan toast setelah 3 detik
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
});
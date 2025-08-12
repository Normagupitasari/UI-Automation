# UI Automation Testing - SauceDemo

Project ini adalah contoh **UI Automation Testing** menggunakan **JavaScript**, **Mocha**, dan **Selenium WebDriver** untuk menguji website [SauceDemo](https://www.saucedemo.com).

## 📂 Struktur Project
.
├── mochawesome-report # Report hasil testing (Mocha + Mochawesome)
├── node_modules # Dependency project
├── pages # Page Object Model (POM) files
├── test # Test scripts
│ ├── sesi9.js
│ ├── sesi10.js
│ └── sesi11.js
├── package.json # Konfigurasi project & dependency
├── package-lock.json
└── README.md

## 🚀 Teknologi yang Digunakan
- **Node.js** & **npm**
- **Mocha** (Test runner)
- **Selenium WebDriver**
- **ChromeDriver**
- **Mochawesome** (Test report)
- **Page Object Model (POM)** untuk struktur test yang lebih rapi

## 📌 Fitur Pengujian
Beberapa skenario pengujian yang dilakukan:
1. **Cek Page Title** - Memastikan judul halaman sesuai (`Swag Labs`).
2. **Cek Button Login** - Memastikan tombol login tampil.
3. **Login Valid** - Login menggunakan kredensial `standard_user` dan `secret_sauce`.
4. **Sorting Produk Z-A** - Menguji fitur pengurutan produk.
5. **Headless Testing** - Menjalankan test tanpa membuka browser GUI.
6. **Screenshot** - Menyimpan screenshot hasil test, baik full page maupun elemen tertentu.
7. **POM Implementation** - Menggunakan file `page_login.js` untuk memisahkan locator dan action.

## ⚙️ Cara Menjalankan Project

1. **Clone repository**
   ```bash
   git clone https://github.com/Normagupitasari/UI-Automation.git
   cd UI-Automation
   Install dependency
   npm install
   
 2. **Jalankan test**
    npx mocha test/sesi9.js
    npx mocha test/sesi10.js
    npx mocha test/sesi11.js

3. **Lihat report Mochawesome**
   npx mocha test/sesi11.js --reporter mochawesome

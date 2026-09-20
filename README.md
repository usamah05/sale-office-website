# SuperOffice BWA

SuperOffice BWA adalah web katalog ruang kantor dan coworking yang membantu pengguna menemukan ruang kerja yang sesuai dengan kebutuhan produktivitas mereka. Pengguna dapat menjelajahi kota, melihat pilihan ruang kantor, dan membuka halaman detail untuk memeriksa harga, durasi, rating, fasilitas, alamat, serta kontak sales.

## Fitur Utama

- Landing page dengan hero banner, statistik, dan brand partner.
- Katalog kota yang tersedia, termasuk jumlah ruang kantor pada setiap kota.
- Daftar ruang kantor pilihan dengan harga, lokasi, durasi, rating, dan label.
- Halaman detail kota dengan filter ruang kantor berdasarkan lokasi.
- Halaman detail ruang kantor dengan informasi fasilitas, status ketersediaan, peta lokasi, dan kontak sales.
- Carousel kota menggunakan Swiper.
- Optimasi gambar melalui komponen `next/image` dan aset lokal.

## Teknologi

- [Next.js](https://nextjs.org/) 16 dengan App Router
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Swiper](https://swiperjs.com/) untuk carousel
- ESLint untuk pemeriksaan kualitas kode

## Prasyarat

Pastikan perangkat telah memiliki:

- Node.js 20 atau versi yang lebih baru
- npm 10 atau versi yang lebih baru

## Menjalankan Proyek

1. Clone repository dan masuk ke direktori proyek.

2. Install dependencies:

```bash
npm install
```

3. Jalankan development server:

```bash
npm run dev
```

4. Buka [http://localhost:3000](http://localhost:3000) di browser.

## Perintah yang Tersedia

| Perintah | Keterangan |
| --- | --- |
| `npm run dev` | Menjalankan development server dengan hot reload. |
| `npm run build` | Membuat build production. |
| `npm start` | Menjalankan hasil build production. |
| `npm run lint` | Menjalankan ESLint. |

## Struktur Proyek

```text
src/
|-- app/                         # Route dan layout aplikasi
|   |-- (front)/city/[slug]/     # Halaman detail kota
|   |-- (front)/office/[slug]/   # Halaman detail ruang kantor
|   |-- layout.tsx               # Root layout dan metadata
|   `-- page.tsx                 # Landing page
|-- components/                  # Komponen UI yang digunakan bersama
`-- features/
    |-- cities/                  # Komponen, tipe, dan data kota
    `-- offices/                 # Komponen, tipe, dan data ruang kantor

public/assets/                   # Gambar, ikon, logo, dan foto aplikasi
```

## Data Aplikasi

Data kota dan ruang kantor saat ini menggunakan mock data yang didefinisikan di:

- `src/features/cities/data/cities.mock.ts`
- `src/features/offices/data/officeSpaces.mock.ts`

Penambahan atau perubahan listing dapat dilakukan melalui file tersebut tanpa mengubah struktur komponen utama.

## Route Utama

| Route | Keterangan |
| --- | --- |
| `/` | Landing page katalog SuperOffice BWA. |
| `/city/[slug]` | Daftar ruang kantor pada kota tertentu. |
| `/office/[slug]` | Detail ruang kantor dan informasi pemesanan. |

## Status Pengembangan

Proyek ini berfokus pada pengalaman katalog dan detail ruang kantor menggunakan data lokal. Integrasi backend, autentikasi, dan alur booking end-to-end dapat ditambahkan pada tahap pengembangan berikutnya.

## Lisensi

Proyek ini merupakan aplikasi internal/eksperimental untuk kebutuhan pengembangan SuperOffice BWA.

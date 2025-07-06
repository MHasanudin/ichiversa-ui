# Dokumentasi Dasar iChiversa UI

## 1. Tujuan & Visi

**iChiversa UI** adalah library komponen UI modular untuk Vue 3 + TailwindCSS 3, dengan misi:
- Meningkatkan produktivitas developer aplikasi modern & responsif.
- Menyediakan solusi UI reusable & scalable untuk project apa pun, termasuk hybrid Laravel+Vue.
- Mempercepat prototyping dan scaling produk digital di berbagai industri.
- Mengadopsi best practice modern (TypeScript, i18n, theming, SSR/SPA, accessibility).

---

## 2. Filosofi Arsitektur

- **Modular:** Setiap komponen di folder sendiri, lengkap style & index.
- **Reusable:** Semua komponen bisa di-import individual atau via global plugin.
- **Scalable:** Struktur siap untuk tim besar & pengembangan jangka panjang.
- **Customizable:** Mendukung design token, dark/light mode, dan integrasi icon eksternal.
- **Konvensi Industri:** Mengadopsi standar UI library global modern.

---

## 3. Struktur Folder Project

ichiversa-ui/
├── playground/
├── public/
├── src/
│ ├── components/
│ │ ├── Button/
│ │ │ ├── CvButton.vue
│ │ │ ├── CvButton.css
│ │ │ └── index.ts
│ │ ├── Input/
│ │ │ ├── CvInput.vue
│ │ │ ├── CvInput.css
│ │ │ └── index.ts
│ │ └── ...
│ ├── icons/
│ ├── tokens/
│ ├── utils/
│ ├── index.ts
│ └── plugin.ts
├── tailwind.config.js
├── package.json
└── README.md


---

## 4. Checklist Komponen & Deskripsi

| Komponen                    | Deskripsi                                      |
|-----------------------------|-----------------------------------------------|
| Button                      | Tombol aksi untuk submit, simpan, dsb.        |
| Input                       | Input teks satu baris.                        |
| Textarea                    | Input teks multi-baris.                       |
| Select / Dropdown           | Pemilihan satu/beberapa opsi.                 |
| Checkbox                    | Pilihan multi/select boolean.                 |
| Radio                       | Pilihan satu dari beberapa opsi.              |
| Switch / Toggle             | Saklar on/off boolean.                        |
| Avatar                      | Foto/inisial profil user.                     |
| Badge / Pill                | Label status/kategori.                        |
| Alert / Notification        | Pesan peringatan/informasi.                   |
| Card                        | Kontainer visual data/info.                   |
| Modal / Dialog              | Popup interaksi khusus.                       |
| Drawer / SidePanel          | Panel geser sisi layar.                       |
| Tooltip                     | Informasi singkat on-hover.                   |
| Popover                     | Overlay kecil dekat elemen.                   |
| Accordion                   | Daftar buka/tutup vertical.                   |
| Tabs                        | Navigasi konten berbasis tab.                 |
| Breadcrumbs                 | Navigasi hirarki posisi halaman.              |
| Progress Bar                | Indikator progres loading/upload.             |
| Spinner / Loader            | Animasi loading.                              |
| Pagination                  | Navigasi halaman data panjang.                |
| Collapse                    | Tampilkan/sembunyikan konten dinamis.         |
| Stepper / Wizard            | Navigasi proses multi-langkah.                |
| Slider / Range              | Input rentang nilai.                          |
| Rating                      | Input/tampilan rating bintang/angka.          |
| Divider / Separator         | Garis pemisah konten.                         |
| DropdownMenu (multi-level)  | Dropdown menu bertingkat.                     |
| Menu / List                 | Daftar menu/aksi.                             |
| Calendar / Datepicker       | Input pemilihan tanggal.                      |
| Table / DataTable           | Tabel data (sort/filter).                     |
| FormGroup / FormItem        | Grup field form.                              |
| FormLabel                   | Label field form.                             |
| FormHelperText / ErrorMessage| Bantuan/error field.                         |
| FileUpload / FileInput      | Input upload file.                            |
| NumberInput                 | Input angka.                                  |
| Container                   | Pembungkus layout utama.                      |
| Grid                        | Layout grid responsif.                        |
| Flex                        | Layout flex horizontal/vertikal.              |
| Sheet (BottomSheet)         | Panel overlay bawah layar.                    |
| ScrollArea                  | Area konten dengan custom scroll.             |
| EmptyState                  | Tampilan data kosong.                         |
| Skeleton                    | Placeholder loading.                          |
| Timeline                    | Urutan kronologis/aktivitas.                  |
| Snackbar / Toast            | Notifikasi ringan sementara.                  |
| Dialog / Confirm            | Popup konfirmasi user.                        |
| Navbar                      | Navigasi utama bagian atas.                   |
| Sidebar                     | Navigasi sisi kiri/kanan.                     |
| Icon                        | Wrapper komponen ikon (Lucide, dsb).          |
| IconButton                  | Tombol ikon aksi kecil/edit.                  |
| ThemeSwitch                 | Pengubah tema dark/light mode.                |

---

## 5. Panduan Pengembangan

- **Prefix komponen:** Gunakan prefix konsisten (Cv/Ic) di setiap komponen, misal: CvButton, CvInput.
- **Style:** Buat file CSS per komponen jika perlu, import di file .vue.
- **Ekspor komponen:** Semua komponen diekspor via index.ts per-folder & di src/components/index.ts.
- **Integrasi global:** Komponen bisa didaftarkan global melalui plugin src/plugin.ts.
- **Testing:** Semua komponen wajib dites di playground.

---

## 6. Roadmap & Checklist Dev

1. Setup project (Vite + Vue 3 + Tailwind + TS)
2. Setup struktur modular
3. Generate komponen inti (lihat daftar di atas)
4. Implementasi design token & theme switcher
5. Dokumentasi & playground/preview
6. Integrasi testing/unit test
7. Rilis open source (NPM/GitHub)
8. Support internationalization (i18n EN/ID)
9. CI/CD & publish automation

---

## 7. Catatan & Penutup

- Library ini dirancang fleksibel (SPA, SSR, hybrid Laravel-Vue).
- Style utama tetap TailwindCSS, namun bisa extend CSS per komponen.
- Komponen ikon bisa pakai Lucide atau icon set lain.
- Dokumentasi ini jadi pedoman awal dan acuan tim dalam pengembangan iChiversa UI.

---
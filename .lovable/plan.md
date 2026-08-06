## Diagnosis

Halaman `/harga` sebenarnya **sudah ada** dan berfungsi (`src/routes/harga.tsx`). Masalahnya di link navbar:

Di `src/routes/index.tsx` baris 82, item nav "Harga" diarahkan ke `#harga` (anchor scroll ke section Pricing di homepage), bukan ke route `/harga`. Ini terkonfirmasi dari URL yang sedang Anda lihat: `/#harga` — jadi klik "Harga" hanya scroll ke section pricing ringkas di homepage, bukan membuka halaman katalog harga lengkap.

## Perubahan

Di `src/routes/index.tsx`:

1. **Navbar link "Harga"** — ubah dari anchor `#harga` menjadi `<Link to="/harga">` (TanStack Router Link) sehingga membuka halaman katalog harga.
2. **Tombol "Lihat Detail Harga"** di section Pricing homepage (baris ~525) — pastikan mengarah ke `/harga` juga (via `<Link to="/harga">`) supaya user bisa lompat ke halaman lengkap dari section ringkas.
3. Jaga style pill/hover tetap sama, dan tetap gunakan `<a>` untuk anchor internal lain (Beranda, Layanan, Katalog, Kontak) yang memang untuk scroll di homepage.

Tidak ada perubahan pada `harga.tsx` sendiri — halaman itu sudah siap.
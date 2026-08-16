# Daru Portfolio — UI Redesign Summary (v2 "Editorial Luxe")

Semua file sudah langsung diterapkan ke folder `C:\Users\ASUS\OneDrive\Documents\Portofolio Daru Claude` di komputermu. Tinggal refresh `http://localhost:3000/en` (atau `/id`) untuk melihat hasilnya.

## Konsep Desain Baru

Desain diubah dari gaya "clean minimal SaaS" ke gaya **editorial / luxury boutique studio** — seperti portfolio desainer premium internasional. Kuncinya: tipografi serif dramatis, warna hangat (bukan putih-abu steril), garis hairline tipis, dan detail kecil yang rapi.

## Perubahan Utama

| Aspek | Sebelum | Sekarang |
|---|---|---|
| Font display | Plus Jakarta Sans (bold, 700) | **Playfair Display** (serif elegan, 550) dengan italic accent |
| Warna dasar | Putih keabu-abuan `#faf9f6` / tinta `#14130f` | **Ivory hangat** `#f7f4ee` / tinta hangat `#191712` |
| Aksen | Hitam polos | **Bronze/champagne** `#a0793b` untuk hover, link, kicker |
| Label section | Mono kecil biasa | **Kicker** dengan garis bronze di depannya |
| Kartu kapabilitas | Card rounded besar | **List editorial** dengan hairline divider + nomor + icon |
| Statistik | Card rounded | Tipografi serif besar dengan divider hairline |
| Judul halaman | Mono eyebrow | Kicker elegan + heading serif lebih besar |
| Nav header | Underline biasa | Logo serif italic "Daru Portfolio" + active indicator bronze |
| Footer | Heading biasa | **Judul serif italic besar** + spacing lega |
| Hover state | Fade opacity | Warna bronze + arrow slide, card lift halus |
| Preview placeholder | Frame polos | Frame dengan **corner ticks** (tanda sudut) |
| Tombol filter arsip | Pill gelap | Pill mono uppercase, aktif = bronze |
| Badge status | Teks polos + dot | Pill hairline dengan font mono uppercase |

## Section Hero

Hero kini punya struktur lebih dramatis: kata kunci ("products" / "produk digital" dan "a product?" / "sebuah produk?") di-render **italic warna bronze** di tengah kalimat serif besar, seperti majalah editorial.

## File yang Diubah (22 file)

- `src/app/globals.css` — token warna + font baru + utility `.kicker` dan `.lift`
- `src/app/[locale]/layout.tsx` — Google Font Playfair Display
- `src/app/[locale]/page.tsx` — hero, sections 01–04, stats, about quote, CTA
- `src/app/[locale]/work|about|archive|contact/page.tsx` — hero dan heading konsisten
- `src/app/[locale]/work/[slug]/page.tsx` — detail case study (links, heading, ecosystem)
- `src/components/*` — header, footer, project cards, placeholder, badge, explorer, nav
- `messages/en.json` dan `messages/id.json` — key baru untuk judul yang di-split

## Verifikasi

Lint dan TypeScript check sudah lolos bersih, dan halaman `/en` serta `/id` ter-render normal (tanpa error MISSING_MESSAGE). Dev server masih jalan di localhost:3000.

## Kalau Mau Balik ke Desain Lama

Semua perubahan ada di git. Kalau kurang sreg, tinggal jalankan `git stash` (atau `git checkout .`) di terminal untuk kembali ke versi sebelumnya.

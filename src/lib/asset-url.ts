// Semua gambar disimpan sebagai pointer CDN Lovable (/__l5e/assets-v1/...).
// Path itu absolut ke root, jadi saat di-deploy ke GitHub Pages (base /designermosleem/)
// URL-nya tidak ditemukan. Helper ini otomatis menambahkan origin CDN pada build
// non-root (GitHub Pages), dan membiarkan path apa adanya di preview/hosting Lovable.
const CDN_ORIGIN = "https://designermosleem.lovable.app";

type AssetPointer = { url: string };

export function assetUrl(asset: AssetPointer | string): string {
  const url = typeof asset === "string" ? asset : asset.url;
  if (/^(https?:)?\/\//.test(url) || url.startsWith("data:")) return url;

  const base = import.meta.env.BASE_URL || "/";

  // Aset CDN Lovable: selalu absolut ke origin Lovable saat base bukan "/".
  if (url.startsWith("/__l5e/")) {
    return base === "/" ? url : `${CDN_ORIGIN}${url}`;
  }

  // File statis biasa (public/): ikuti base path.
  return `${base.replace(/\/$/, "")}/${url.replace(/^\//, "")}`;
}

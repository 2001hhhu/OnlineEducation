export function getImageUrl(url) {
  return new URL(url, import.meta.url).href
}

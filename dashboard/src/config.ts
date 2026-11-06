/** پایه URL برای فایل‌های JSON؛ در production می‌توان به CDN یا GitHub raw اشاره کرد */
export const DATA_BASE =
  (import.meta.env.VITE_DATA_BASE_URL as string | undefined)?.replace(/\/$/, "") ?? "";

export function dataUrl(relativePath: string): string {
  const path = relativePath.startsWith("/") ? relativePath : `/${relativePath}`;
  if (!DATA_BASE) return path;
  return `${DATA_BASE}${path}`;
}

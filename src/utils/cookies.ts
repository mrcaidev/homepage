/**
 * Get cookie value.
 *
 * @param key Key of cookie.
 * @returns Value of cookie, or `undefined` if cookie does not exist.
 */
export function getCookie(key: string) {
  const keyRegex = new RegExp(`\\b${key}=([^;]+)`);
  try {
    return document.cookie.match(keyRegex)?.at(1);
  } catch (err) {
    console.error(err);
  }
}

/**
 * Set cookie.
 *
 * @param key Key of cookie.
 * @param value Value of cookie.
 */
export function setCookie(key: string, value: string) {
  try {
    document.cookie = `${key}=${value}`;
  } catch (err) {
    console.error(err);
  }
}

/**
 * Remove cookie.
 *
 * @param key Key of cookie.
 */
export default function removeCookie(key: string) {
  try {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure`;
  } catch (err) {
    console.error(err);
  }
}

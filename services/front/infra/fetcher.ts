export default function getAllService(url: string, options?: RequestInit) {
  return fetch(url, options).then((res) => res.json());
}

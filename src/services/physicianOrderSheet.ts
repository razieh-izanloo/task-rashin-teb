import type { Info } from "../types/info";

export function getInfo() {
  return fetch("https://624a9ef1fd7e30c51c0f941a.mockapi.io/info/items")
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch data");
      return res.json();
    })
    .then((data: Info[]) => data[0]);
}


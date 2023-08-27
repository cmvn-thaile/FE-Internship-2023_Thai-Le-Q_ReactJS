export enum StorageKey {
  CartData = "cartData",
  CartQuantity = "cartQuantity",
}

export function saveToLocalStorage(key: StorageKey, data: any) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getFromLocalStorage(key: StorageKey): any {
  const data = localStorage.getItem(key);
  console.log("Retrieved data from local storage:", data);
  try {
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null;
  }
}
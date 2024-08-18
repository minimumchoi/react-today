export function getStorageData(
  key,
  initialValue = null,
  storageType = "local"
) {
  const storage = storageType === "local" ? localStorage : sessionStorage;
  const data = storage.getItem(key);
  return data ? JSON.parse(data) : initialValue;
}

/**@type {(key: string, value: any, storageType: 'local' | 'session') => void} */
export function setStorageData(key, newData) {
  // 로컬스토리지에서 현재 데이터를 가져옵니다.
  const existingData = JSON.parse(localStorage.getItem(key)) || [];

  // 새로운 데이터를 기존 데이터 배열에 추가합니다.
  existingData.push(newData);

  // 업데이트된 배열을 로컬스토리지에 저장합니다.
  localStorage.setItem(key, JSON.stringify(existingData));
}

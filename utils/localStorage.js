function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    let x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

export function getFromLocalStorage(k) {
  if (storageAvailable('localStorage')) {
    return window.localStorage.getItem(k);
  }

  return '';
}

export function saveToLocalStorage(k, v) {
  if (storageAvailable('localStorage')) {
    window.localStorage.setItem(k, v);
  }
}

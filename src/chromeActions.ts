export const getFromStorage = (key: string): Promise<any> => {
  return new Promise((resolve) => {
    chrome.storage.local.get([key], (response) => {
      if (!Object.keys(response).length) {
        resolve(undefined);
      }
      try {
        resolve(JSON.parse(response[key]));
      } catch (error) {
        resolve(undefined);
      }
    });
  });
};

export const setToStorage = (key: string, data: any) => {
  return new Promise<void>((resolve) => {
    chrome.storage.local.set({ [key]: JSON.stringify(data) }, resolve);
  });
};

export const removeFromStorage = (key: string) => {
  chrome.storage.local.remove(key);
};

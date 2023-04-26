const nameItem = 'colorList';

export const setColorListLocal = (item) => {
  localStorage.setItem(nameItem, JSON.stringify(item));
};

export const getColorListLocal = () => {
  return JSON.parse(localStorage.getItem(nameItem)) || [];
};

export const getLastColor = () => {
  const listColor = getColorListLocal();

  return listColor[0] || "#000000";
}; 
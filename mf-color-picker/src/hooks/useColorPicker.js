import { useState, useEffect } from 'react';
import { getColorListLocal, getLastColor, setColorListLocal } from '../helpers/colorsHelper';

export const useColorPicker = () => {
  const [color, setColor] = useState(getLastColor());
  const [colorList, setColorList] = useState(getColorListLocal());

  const handleColorChange = (e) => {
    const { value } = e.target;
    setColor(value);
  };

  const handleSubmitSaveColor = (e) => {
    e.preventDefault();
    setColorList(prevState => ([color, ...prevState]));
  };

  useEffect(() => {
    setColorListLocal(colorList);
  }, [colorList]);

  return {
    color,
    colorList,
    handleSubmitSaveColor,
    handleColorChange
  };
};
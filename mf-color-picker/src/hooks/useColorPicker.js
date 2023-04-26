import { useState } from 'react';

export const useColorPicker = () => {
  const [color, setColor] = useState('#000000');
  const [colorList, setColorList] = useState([]);

  const handleColorChange = (e) => {
    const { value } = e.target;
    setColor(value);
  };

  const handleSubmitSaveColor = (e) => {
    e.preventDefault();
    setColorList(prevState => ([color, ...prevState]));
  };

  return {
    color,
    colorList,
    handleSubmitSaveColor,
    handleColorChange
  };
};
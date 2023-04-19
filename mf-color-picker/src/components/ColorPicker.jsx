import React, { useState } from 'react';

const ColorPicker = () => {
  const [color, setColor] = useState('#000000');

  const handleColorChange = (e) => {
    const { value } = e.target;
    setColor(value);
  };

  const handleSubmitSaveColor = (e) => {
    e.preventDefault();
    alert(`El color seleccionado es: ${color}`);
  };

  return (
    <form onSubmit={handleSubmitSaveColor}>
      <input
        type="color"
        className='form-control'
        style={{
          width: '100%',
          height: '300px'
        }}
        title='Seleccione un color...'
        onChange={handleColorChange}
      />

      <div className="text-center">
        <h2 className="mt-3 fw-bolder">
          <div style={{
            width: '20px',
            height: '20px',
            background: color,
            display: 'inline-block',
            margin: '0 1rem',
            borderRadius: '100%'
          }}>
          </div>
          {color}
        </h2>

        <button
          type="submit"
          className='btn btn-success'
        >
          Guardar color
        </button>
      </div>
    </form>
  );
};

export default ColorPicker;
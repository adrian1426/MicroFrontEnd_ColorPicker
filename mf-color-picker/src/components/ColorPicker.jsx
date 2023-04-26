import React from 'react';
import { useColorPicker } from '../hooks/useColorPicker';

const ColorPicker = () => {
  const { color, handleColorChange, handleSubmitSaveColor } = useColorPicker();

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
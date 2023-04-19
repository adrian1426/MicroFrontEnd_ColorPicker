import React from 'react';

const ColorList = () => {

  const colors = ["#000000", "#971c1c", "#2ab4cf", "#4ecf2a"];

  return (
    <div className="list-group text-center">
      {
        colors.map((color, i) => (
          <button
            key={i}
            type='button'
            className='list-group-item list-group-item-action text-primary text-white'
            aria-current="true"
            title='Copiar'
            style={{
              background: color,
              fontWeight: 'bolder'
            }}
          >
            {color}
          </button>
        ))
      }
    </div>
  );
};

export default ColorList;
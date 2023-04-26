import React from 'react';

const ColorList = (props) => {
  const { colors } = props;

  if (colors.length <= 0) {
    return (
      <div className="list-group text-center">
        <b>Aún no hay colores agregados</b>
      </div>
    );
  }

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
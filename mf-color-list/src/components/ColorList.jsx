import React from 'react';
import SweetAlert from 'sweetalert2';

const ColorList = (props) => {
  const { colors } = props;

  const handleCopyColor = (color) => {
    navigator.clipboard.writeText(color);

    SweetAlert.fire({
      position: 'center',
      icon: 'success',
      title: `Color ${color} copiado.`,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true
    });
  };

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
            onClick={() => handleCopyColor(color)}
          >
            {color}
          </button>
        ))
      }
    </div>
  );
};

export default ColorList;
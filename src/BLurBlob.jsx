import React from 'react'
import PropTypes from 'prop-types'

export const BLurBlob = ({ position, size}) => {
      //destructutre position and size
  const { top, left } = position;
    const { width, height } = size;
     
  return (
    <div className='absolute'
    style={{
        top:top,
        left:left,
        width:width,    
        height:height,
        transform:'translate(-50%, -50%)',

    }}
    >
        <div className='w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob'>

        </div>

    </div>
  )
}

//define prop types
BLurBlob.propTypes = {
    position: PropTypes.shape({
        top: PropTypes.string,
        left: PropTypes.striing,
    }),
    size: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
    }),
};

export default BLurBlob;
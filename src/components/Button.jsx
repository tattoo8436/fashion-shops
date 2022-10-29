import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {

    const bg = props.bgColor ? 'bg-' + props.bgColor : 'bg-main';
    const size = props.size ? 'btn-' + props.size : '';
    const animate = props.animate ? 'btn-animate' : '';

  return (
    <button
      className={`btn ${bg} ${size} ${animate}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      <span className='btn__txt'>{props.children}</span>
    </button>
  )
}

Button.propTypes = {
    bgColor: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.string,
    animate: PropTypes.bool,
    onClick: PropTypes.func
}

export default Button
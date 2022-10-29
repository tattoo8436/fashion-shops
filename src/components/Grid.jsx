import React from 'react'
import PropTypes from 'prop-types'

const Grid = props => {

    const style = {
        gap: props.gap ? `${props.gap}px` : '0'
    }

    const col = props.col ? `grid-col-${props.col}` : '';
    const smCol = props.smCol ? `grid-col-sm-${props.smCol}` : '';

    return (
        <div className={`grid ${col} ${smCol}`} style={style}>
            {props.children}
        </div>
    )
}

Grid.propTypes = {
    col: PropTypes.number.isRequired,
    smCol: PropTypes.number,
    gap: PropTypes.number
}

export default Grid
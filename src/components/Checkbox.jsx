import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = props => {
    const inputRef = React.useRef(null);
    const onChange = () => {
        if(props.onChange){
            props.onChange(inputRef.current);
        }
    }

    return (
        <label className='custom-checkbox'>
            <input type="checkbox" ref={inputRef} onChange={onChange} checked={props.checked} />
            <p className='custom-checkbox__label'>{props.label}</p>
        </label>
    )
}

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool
}

export default Checkbox
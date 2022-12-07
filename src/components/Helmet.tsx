import React from 'react'

interface HelmetProps{
    children: JSX.Element | JSX.Element[],
    title: string
}

const Helmet = (props: HelmetProps): JSX.Element => {
    document.title = 'Yolo - ' + props.title;

    return (
        <div>{props.children}</div>
    )
}

export default Helmet
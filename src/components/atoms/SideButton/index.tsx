import React from 'react';
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";

type Props = {
    side: string;
    size?: number;
    onClick?: any;
}

const buttonStyle = {
    padding: 0,
    margin: 0,
    backgroundColor: 'transparent',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    cursor: 'pointer'
}

export default function SideButton({side, size, onClick}: Props) {
    return(
        <>
        <button style={buttonStyle} onClick={onClick}>
            {side == 'right' ?
                <AiFillCaretRight size={size} />
            : null }
            {side == 'left' ?
                <AiFillCaretLeft size={size} />
            : null }
        </button>
        </>
    );
}